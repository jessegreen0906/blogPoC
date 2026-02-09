import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PostTemplate } from "@/components/post-template";
import { posts } from "@/lib/posts";

describe("PostTemplate", () => {
  it("renders the selected post content", () => {
    const post = posts[0];
    render(<PostTemplate post={post} />);

    expect(screen.getByRole("heading", { name: post.title })).toBeInTheDocument();
    expect(screen.getByText(post.excerpt)).toBeInTheDocument();
    expect(screen.getByText(post.content)).toBeInTheDocument();
  });
});
