import { describe, expect, it } from "vitest";
import { formatPostDate, getPostBySlug, posts } from "@/lib/posts";

describe("posts library", () => {
  it("exposes a non-empty post list sorted newest first", () => {
    expect(posts.length).toBeGreaterThan(0);
    expect(posts[0].publishedAt >= posts[posts.length - 1].publishedAt).toBe(true);
  });

  it("returns a post by slug", () => {
    const post = getPostBySlug(posts[0].slug);
    expect(post?.title).toBe(posts[0].title);
  });

  it("formats post dates in en-AU locale style", () => {
    expect(formatPostDate("2026-02-10")).toBe("10 February 2026");
  });
});
