import { randomUUID } from "node:crypto";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const REGION = process.env.AWS_REGION ?? "ap-southeast-2";

const client = DynamoDBDocumentClient.from(new DynamoDBClient({ region: REGION }));

export function getSubscriptionsTableName(
  env: { SUBSCRIPTIONS_TABLE_NAME?: string } = process.env as {
    SUBSCRIPTIONS_TABLE_NAME?: string;
  },
) {
  const tableName = env.SUBSCRIPTIONS_TABLE_NAME;
  if (!tableName) {
    throw new Error("SUBSCRIPTIONS_TABLE_NAME is not configured.");
  }
  return tableName;
}

export async function saveSubscriptionEmail(email: string) {
  const tableName = getSubscriptionsTableName();

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
