import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PostList } from "@/components/post-list";
import type { BlogPostMeta } from "@/lib/blog";

const posts: BlogPostMeta[] = [
  {
    slug: "firstPost",
    title: "My first post",
    date: "2026-02-10",
    excerpt: "You wouldn't believe it, but this is my first post.",
  },
];

describe("PostList", () => {
  it("renders a list of post titles and links", () => {
    render(<PostList items={posts} />);

    expect(screen.getByRole("heading", { name: "Latest posts" })).toBeInTheDocument();
    for (const post of posts) {
      expect(screen.getByRole("link", { name: post.title })).toHaveAttribute(
        "href",
        `/blog/${post.slug}`,
      );
    }
  });
});
