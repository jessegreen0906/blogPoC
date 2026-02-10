import { describe, expect, it } from "vitest";
import {
  formatPostDate,
  getAllPosts,
  getPostBySlug,
  getPostPreview,
} from "@/lib/blog";

describe("blog markdown library", () => {
  it("loads markdown posts sorted by newest date", async () => {
    const posts = await getAllPosts();
    expect(posts.length).toBeGreaterThan(0);
    expect(posts[0].date >= posts[posts.length - 1].date).toBe(true);
  });

  it("loads a single post by slug and returns rendered html", async () => {
    const post = await getPostBySlug("firstPost");
    expect(post?.title).toBe("My first post");
    expect(post?.contentHtml).toContain("<h1>My first post</h1>");
  });

  it("returns a preview with excerpt for homepage callout", async () => {
    const latest = await getPostPreview();
    expect(latest).toBeDefined();
    expect(latest?.excerpt.length).toBeGreaterThan(10);
  });

  it("prefers frontmatter excerpt when provided", async () => {
    const latest = await getPostPreview();
    expect(latest?.excerpt).toBe("A short intro to my first post.");
  });

  it("formats dates using en-AU long style", () => {
    expect(formatPostDate("2026-02-10")).toBe("10 February 2026");
  });
});
