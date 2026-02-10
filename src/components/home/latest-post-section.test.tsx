import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { LatestPostSection } from "@/components/home/latest-post-section";
import type { BlogPostMeta } from "@/lib/blog";

const post: BlogPostMeta = {
  slug: "firstPost",
  title: "My first post",
  date: "2026-02-10",
  excerpt: "A short intro to my first post.",
};

describe("LatestPostSection", () => {
  afterEach(() => {
    cleanup();
  });

  it("uses matte 2D section styling without border or shadow", () => {
    const { container } = render(<LatestPostSection post={post} />);
    const section = container.querySelector("section");

    expect(section).not.toBeNull();
    expect(section?.className).toContain("w-full");
    expect(section?.className).not.toContain("border");
    expect(section?.className).not.toContain("shadow");
    expect(container.innerHTML).toContain("max-w-6xl");
  });

  it("renders latest post summary with read link", () => {
    render(<LatestPostSection post={post} />);
    expect(screen.getByRole("heading", { name: "Latest from the blog" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Read latest post" })).toHaveAttribute(
      "href",
      "/blog/firstPost",
    );
  });
});
