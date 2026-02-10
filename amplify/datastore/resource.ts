import { AttributeType, BillingMode, Table } from "aws-cdk-lib/aws-dynamodb";
import { Stack } from "aws-cdk-lib";

type BackendLike = {
  createStack: (name: string) => Stack;
  addOutput: (output: unknown) => void;
};

export function configureSubscriptionsDatastore(backend: BackendLike) {
  const subscriptionsStack = backend.createStack("subscriptions-datastore");
  const subscriptionsTable = new Table(subscriptionsStack, "GatewatchSubscriptionsTable", {
    partitionKey: { name: "id", type: AttributeType.STRING },
    billingMode: BillingMode.PAY_PER_REQUEST,
    pointInTimeRecovery: true,
  });

  backend.addOutput({
    custom: {
      SUBSCRIPTIONS_TABLE_NAME: subscriptionsTable.tableName,
      SUBSCRIPTIONS_TABLE_ARN: subscriptionsTable.tableArn,
    },
  });

  return subscriptionsTable;
}
