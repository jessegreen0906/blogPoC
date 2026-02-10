import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { UpcomingBookSection } from "@/components/home/upcoming-book-section";
import { books } from "@/lib/books";

describe("UpcomingBookSection", () => {
  afterEach(() => {
    cleanup();
  });

  it("uses matte 2D section styling without border or shadow", () => {
    const { container } = render(<UpcomingBookSection book={books[0]} />);
    const section = container.querySelector("section");

    expect(section).not.toBeNull();
    expect(section?.className).toContain("w-full");
    expect(section?.className).not.toContain("border");
    expect(section?.className).not.toContain("shadow");
    expect(container.innerHTML).toContain("max-w-6xl");
  });

  it("renders upcoming book callout content", () => {
    render(<UpcomingBookSection book={books[0]} />);
    expect(screen.getByRole("heading", { name: "Upcoming book" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: books[0].title })).toBeInTheDocument();
  });
});
