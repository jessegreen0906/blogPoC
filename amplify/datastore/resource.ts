import { AttributeType, BillingMode, Table } from "aws-cdk-lib/aws-dynamodb";
import { Stack } from "aws-cdk-lib";

export const SUBSCRIPTIONS_TABLE_NAME = "GatewatchSubscriptions";

export function createSubscriptionsDatastoreResources(subscriptionsStack: Stack) {
  const subscriptionsTable = new Table(subscriptionsStack, "GatewatchSubscriptionsTable", {
    tableName: SUBSCRIPTIONS_TABLE_NAME,
    partitionKey: { name: "id", type: AttributeType.STRING },
    billingMode: BillingMode.PAY_PER_REQUEST,
    pointInTimeRecovery: true,
  });

  return subscriptionsTable;
}
