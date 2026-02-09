import { describe, expect, it, vi } from "vitest";
import PostPage from "@/app/posts/[slug]/page";

const { notFoundMock } = vi.hoisted(() => ({
  notFoundMock: vi.fn(),
}));

vi.mock("next/navigation", () => ({
  notFound: notFoundMock,
}));

describe("PostPage", () => {
  it("calls notFound for unknown slugs", async () => {
    await PostPage({ params: Promise.resolve({ slug: "missing-post" }) });
    expect(notFoundMock).toHaveBeenCalledTimes(1);
  });
});
