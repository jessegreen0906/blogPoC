import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PostTemplate } from "@/components/post-template";
import type { BlogPost } from "@/lib/blog";

const post: BlogPost = {
  slug: "firstPost",
  title: "My first post",
  date: "2026-02-10",
  excerpt: "You wouldn't believe it, but this is my first post.",
  contentHtml: "<h1>My first post</h1><p>You wouldn't believe it, but this is my first post.</p>",
};

describe("PostTemplate", () => {
  it("renders the selected post content", () => {
    render(<PostTemplate post={post} />);

    expect(screen.getAllByRole("heading", { name: post.title })[0]).toBeInTheDocument();
    expect(screen.getAllByText(post.excerpt)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/You wouldn't believe it/i)[0]).toBeInTheDocument();
  });
});
