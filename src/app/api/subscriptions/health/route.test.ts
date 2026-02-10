import { describe, expect, it, vi } from "vitest";
import { GET } from "@/app/api/subscriptions/health/route";
import { getSubscriptionsRuntimeConfig } from "@/lib/subscription-store";

vi.mock("@/lib/subscription-store", () => ({
  getSubscriptionsRuntimeConfig: vi.fn(),
}));

describe("GET /api/subscriptions/health", () => {
  it("returns subscription runtime diagnostics", async () => {
    vi.mocked(getSubscriptionsRuntimeConfig).mockReturnValue({
      region: "ap-southeast-2",
      tableName: "GatewatchSubscriptions",
      tableNameSource: "default",
      hasAmplifyOutputsFile: false,
    });

    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual({
      ok: true,
      diagnostics: {
        region: "ap-southeast-2",
        tableName: "GatewatchSubscriptions",
        tableNameSource: "default",
        hasAmplifyOutputsFile: false,
      },
    });
  });
});
