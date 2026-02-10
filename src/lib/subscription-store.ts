import { randomUUID } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const REGION = process.env.AWS_REGION ?? "ap-southeast-2";
export const DEFAULT_SUBSCRIPTIONS_TABLE_NAME = "GatewatchSubscriptions";

type CredentialSource = "default_provider_chain" | "explicit_env";

type DynamoCredentialEnv = {
  AWS_REGION?: string;
  DDB_ACCESS_KEY_ID?: string;
  DDB_SECRET_ACCESS_KEY?: string;
  DDB_SESSION_TOKEN?: string;
};

export function getDynamoClientConfig(env: DynamoCredentialEnv = process.env as DynamoCredentialEnv) {
  const accessKeyId = env.DDB_ACCESS_KEY_ID?.trim();
  const secretAccessKey = env.DDB_SECRET_ACCESS_KEY?.trim();
  const sessionToken = env.DDB_SESSION_TOKEN?.trim();

  if (accessKeyId && secretAccessKey) {
    return {
      clientConfig: {
        region: env.AWS_REGION ?? REGION,
        credentials: {
          accessKeyId,
          secretAccessKey,
          ...(sessionToken ? { sessionToken } : {}),
        },
      },
      credentialSource: "explicit_env" as CredentialSource,
    };
  }

  return {
    clientConfig: {
      region: env.AWS_REGION ?? REGION,
    },
    credentialSource: "default_provider_chain" as CredentialSource,
  };
}

const dynamoClientConfig = getDynamoClientConfig();
const client = DynamoDBDocumentClient.from(new DynamoDBClient(dynamoClientConfig.clientConfig));

type AmplifyOutputs = {
  custom?: {
    SUBSCRIPTIONS_TABLE_NAME?: string;
  };
};

type TableResolutionSource = "env" | "amplify_outputs" | "default";

function loadAmplifyOutputs(): AmplifyOutputs | undefined {
  const outputsPath = path.join(process.cwd(), "amplify_outputs.json");
  if (!existsSync(outputsPath)) {
    return undefined;
  }

  try {
    return JSON.parse(readFileSync(outputsPath, "utf8")) as AmplifyOutputs;
  } catch {
    return undefined;
  }
}

export function getSubscriptionsTableName(
  env: { SUBSCRIPTIONS_TABLE_NAME?: string } = process.env as {
    SUBSCRIPTIONS_TABLE_NAME?: string;
  },
  amplifyOutputs?: AmplifyOutputs,
) {
  const envTableName = env.SUBSCRIPTIONS_TABLE_NAME;
  const outputsTableName = amplifyOutputs?.custom?.SUBSCRIPTIONS_TABLE_NAME;

  const tableName = envTableName ?? outputsTableName ?? DEFAULT_SUBSCRIPTIONS_TABLE_NAME;
  const source: TableResolutionSource = envTableName
    ? "env"
    : outputsTableName
      ? "amplify_outputs"
      : "default";

  return { tableName, source };
}

export function getSubscriptionsRuntimeConfig() {
  const outputs = loadAmplifyOutputs();
  const { tableName, source } = getSubscriptionsTableName(undefined, outputs);

  return {
    region: REGION,
    tableName,
    tableNameSource: source,
    hasAmplifyOutputsFile: Boolean(outputs),
    credentialSource: dynamoClientConfig.credentialSource,
  };
}

export async function saveSubscriptionEmail(email: string) {
  const { tableName } = getSubscriptionsTableName(undefined, loadAmplifyOutputs());

  await client.send(
    new PutCommand({
      TableName: tableName,
      Item: {
        id: randomUUID(),
        email,
        createdAt: new Date().toISOString(),
      },
    }),
  );
}
