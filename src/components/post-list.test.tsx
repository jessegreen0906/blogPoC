import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PostList } from "@/components/post-list";
import { posts } from "@/lib/posts";

describe("PostList", () => {
  it("renders a list of post titles and links", () => {
    render(<PostList items={posts} />);

    expect(screen.getByRole("heading", { name: "Latest posts" })).toBeInTheDocument();
    for (const post of posts) {
      expect(screen.getByRole("link", { name: post.title })).toHaveAttribute(
        "href",
        `/posts/${post.slug}`,
      );
    }
  });
});
