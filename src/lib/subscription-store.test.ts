import { describe, expect, it } from "vitest";
import { DEFAULT_SUBSCRIPTIONS_TABLE_NAME, getSubscriptionsTableName } from "@/lib/subscription-store";

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
});
