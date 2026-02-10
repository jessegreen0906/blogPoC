import { randomUUID } from "node:crypto";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const TABLE_NAME = process.env.SUBSCRIPTIONS_TABLE_NAME;
const REGION = process.env.AWS_REGION ?? "ap-southeast-2";

const client = DynamoDBDocumentClient.from(new DynamoDBClient({ region: REGION }));

export async function saveSubscriptionEmail(email: string) {
  if (!TABLE_NAME) {
    throw new Error("SUBSCRIPTIONS_TABLE_NAME is not configured.");
  }

  await client.send(
    new PutCommand({
      TableName: TABLE_NAME,
      Item: {
        id: randomUUID(),
        email,
        createdAt: new Date().toISOString(),
      },
    }),
  );
}
