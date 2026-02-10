import { describe, expect, it } from "vitest";
import {
  DEFAULT_SUBSCRIPTIONS_TABLE_NAME,
  getDynamoClientConfig,
  getSubscriptionsTableName,
} from "@/lib/subscription-store";

describe("subscription store config", () => {
  it("returns explicit subscriptions table name", () => {
    expect(
      getSubscriptionsTableName({
        SUBSCRIPTIONS_TABLE_NAME: "GatewatchSubscriptions",
      }),
    ).toEqual({
      tableName: "GatewatchSubscriptions",
      source: "env",
    });
  });

  it("uses default table name when env and outputs are missing", () => {
    expect(getSubscriptionsTableName({})).toEqual({
      tableName: DEFAULT_SUBSCRIPTIONS_TABLE_NAME,
      source: "default",
    });
  });

  it("uses amplify custom output as a fallback", () => {
    expect(
      getSubscriptionsTableName({}, { custom: { SUBSCRIPTIONS_TABLE_NAME: "FromOutputsTable" } }),
    ).toEqual({
      tableName: "FromOutputsTable",
      source: "amplify_outputs",
    });
  });

  it("uses default credential provider chain when explicit env credentials are missing", () => {
    expect(getDynamoClientConfig({ AWS_REGION: "ap-southeast-2" })).toEqual({
      clientConfig: {
        region: "ap-southeast-2",
      },
      credentialSource: "default_provider_chain",
    });
  });

  it("uses explicit credentials when DDB env vars are set", () => {
    const config = getDynamoClientConfig({
      AWS_REGION: "ap-southeast-2",
      DDB_ACCESS_KEY_ID: "AKIAEXAMPLE",
      DDB_SECRET_ACCESS_KEY: "secret-example",
      DDB_SESSION_TOKEN: "session-token",
    });

    expect(config.credentialSource).toBe("explicit_env");
    expect(config.clientConfig.region).toBe("ap-southeast-2");
    expect(config.clientConfig.credentials).toEqual({
      accessKeyId: "AKIAEXAMPLE",
      secretAccessKey: "secret-example",
      sessionToken: "session-token",
    });
  });
});
