import { randomUUID } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const REGION = process.env.AWS_REGION ?? "ap-southeast-2";

const client = DynamoDBDocumentClient.from(new DynamoDBClient({ region: REGION }));

type AmplifyOutputs = {
  custom?: {
    SUBSCRIPTIONS_TABLE_NAME?: string;
  };
};

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
  const tableName =
    env.SUBSCRIPTIONS_TABLE_NAME ?? amplifyOutputs?.custom?.SUBSCRIPTIONS_TABLE_NAME;

  if (!tableName) {
    throw new Error("SUBSCRIPTIONS_TABLE_NAME is not configured.");
  }
  return tableName;
}

export async function saveSubscriptionEmail(email: string) {
  const tableName = getSubscriptionsTableName(undefined, loadAmplifyOutputs());

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
