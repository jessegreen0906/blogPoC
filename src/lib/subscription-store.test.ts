import { describe, expect, it } from "vitest";
import { getSubscriptionsTableName } from "@/lib/subscription-store";

describe("subscription store config", () => {
  it("returns explicit subscriptions table name", () => {
    expect(
      getSubscriptionsTableName({
        SUBSCRIPTIONS_TABLE_NAME: "GatewatchSubscriptions",
      }),
    ).toBe("GatewatchSubscriptions");
  });

  it("throws when subscriptions table name is missing", () => {
    expect(() => getSubscriptionsTableName({})).toThrowError(
      "SUBSCRIPTIONS_TABLE_NAME is not configured.",
    );
  });

  it("uses amplify custom output as a fallback", () => {
    expect(
      getSubscriptionsTableName({}, { custom: { SUBSCRIPTIONS_TABLE_NAME: "FromOutputsTable" } }),
    ).toBe("FromOutputsTable");
  });
});
