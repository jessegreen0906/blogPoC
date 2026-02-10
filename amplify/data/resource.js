import { AttributeType, BillingMode, Table } from "aws-cdk-lib/aws-dynamodb";

export const SUBSCRIPTIONS_TABLE_NAME = "GatewatchSubscriptions";

export function createSubscriptionsDatastoreResources(subscriptionsStack) {
  const subscriptionsTable = new Table(subscriptionsStack, "GatewatchSubscriptionsTable", {
    tableName: SUBSCRIPTIONS_TABLE_NAME,
    partitionKey: { name: "id", type: AttributeType.STRING },
    billingMode: BillingMode.PAY_PER_REQUEST,
    pointInTimeRecoverySpecification: {
      pointInTimeRecoveryEnabled: true,
    },
  });

  return subscriptionsTable;
}
