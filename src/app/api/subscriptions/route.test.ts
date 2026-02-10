import { afterEach, describe, expect, it, vi } from "vitest";
import { POST } from "@/app/api/subscriptions/route";
import { saveSubscriptionEmail } from "@/lib/subscription-store";

vi.mock("@/lib/subscription-store", () => ({
  saveSubscriptionEmail: vi.fn(),
}));

describe("POST /api/subscriptions", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("returns 400 for invalid email", async () => {
    const request = new Request("http://localhost/api/subscriptions", {
      method: "POST",
      body: JSON.stringify({ email: "invalid" }),
      headers: { "Content-Type": "application/json" },
    });
    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe("Please enter a valid email address.");
    expect(saveSubscriptionEmail).not.toHaveBeenCalled();
  });

  it("stores normalized email for valid submissions", async () => {
    const request = new Request("http://localhost/api/subscriptions", {
      method: "POST",
      body: JSON.stringify({ email: " Reader@Example.com " }),
      headers: { "Content-Type": "application/json" },
    });
    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.ok).toBe(true);
    expect(saveSubscriptionEmail).toHaveBeenCalledWith("reader@example.com");
  });

  it("returns actionable error when table name is missing", async () => {
    vi.mocked(saveSubscriptionEmail).mockRejectedValueOnce(
      new Error("SUBSCRIPTIONS_TABLE_NAME is not configured."),
    );

    const request = new Request("http://localhost/api/subscriptions", {
      method: "POST",
      body: JSON.stringify({ email: "reader@example.com" }),
      headers: { "Content-Type": "application/json" },
    });
    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.error).toBe("SUBSCRIPTIONS_TABLE_NAME is not configured.");
  });

  it("returns actionable error when runtime role lacks permissions", async () => {
    vi.mocked(saveSubscriptionEmail).mockRejectedValueOnce({
      name: "AccessDeniedException",
      message: "User is not authorized for dynamodb:PutItem",
    });

    const request = new Request("http://localhost/api/subscriptions", {
      method: "POST",
      body: JSON.stringify({ email: "reader@example.com" }),
      headers: { "Content-Type": "application/json" },
    });
    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.error).toBe("Subscription datastore permission denied.");
  });
});
