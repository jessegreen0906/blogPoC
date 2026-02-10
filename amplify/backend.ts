import { defineBackend } from "@aws-amplify/backend";
import { createSubscriptionsDatastoreResources } from "./datastore/resource";

const backend = defineBackend({});
const subscriptionsStack = backend.createStack("subscriptions-datastore");
const subscriptionsTable = createSubscriptionsDatastoreResources(subscriptionsStack);

backend.addOutput({
  custom: {
    SUBSCRIPTIONS_TABLE_NAME: subscriptionsTable.tableName,
    SUBSCRIPTIONS_TABLE_ARN: subscriptionsTable.tableArn,
  },
});

export { backend };
