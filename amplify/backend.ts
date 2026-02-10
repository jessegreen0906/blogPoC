import { defineBackend } from "@aws-amplify/backend";
import { configureSubscriptionsDatastore } from "./datastore/resource";

const backend = defineBackend({});
configureSubscriptionsDatastore(backend);

export { backend };
