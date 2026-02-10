import { describe, expect, it, vi } from "vitest";
import BlogPostPage from "@/app/blog/[slug]/page";

const { notFoundMock } = vi.hoisted(() => ({
  notFoundMock: vi.fn(),
}));

vi.mock("next/navigation", () => ({
  notFound: notFoundMock,
}));

describe("BlogPostPage", () => {
  it("calls notFound for unknown slugs", async () => {
    await BlogPostPage({ params: Promise.resolve({ slug: "missing-post" }) });
    expect(notFoundMock).toHaveBeenCalledTimes(1);
  });
});
