import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { SiteHeader } from "@/components/site-header";

const { usePathnameMock } = vi.hoisted(() => ({
  usePathnameMock: vi.fn(),
}));

vi.mock("next/navigation", () => ({
  usePathname: usePathnameMock,
}));

describe("SiteHeader", () => {
  afterEach(() => {
    cleanup();
  });

  it("marks home as current on the homepage", () => {
    usePathnameMock.mockReturnValue("/");
    render(<SiteHeader />);
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(screen.getByRole("link", { name: "About" })).not.toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(screen.getByRole("link", { name: "Blog" })).not.toHaveAttribute(
      "aria-current",
      "page",
    );
  });

  it("marks blog as current on blog routes", () => {
    usePathnameMock.mockReturnValue("/blog/first-post");
    render(<SiteHeader />);
    expect(screen.getByRole("link", { name: "Blog" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(screen.getByRole("link", { name: "Home" })).not.toHaveAttribute(
      "aria-current",
      "page",
    );
  });

  it("marks books as current on the bibliography page", () => {
    usePathnameMock.mockReturnValue("/books");
    render(<SiteHeader />);
    expect(screen.getByRole("link", { name: "Books" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(screen.getByRole("link", { name: "Blog" })).not.toHaveAttribute(
      "aria-current",
      "page",
    );
  });

  it("renders brand title and navigation links", () => {
    usePathnameMock.mockReturnValue("/");
    const { container } = render(<SiteHeader />);

    const logo = screen.getByRole("img", { name: "Jay Westgate logo" });
    expect(logo).toHaveAttribute("src", expect.stringContaining("sig_magenta.png"));
    expect(logo.closest("a")).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "Books" })).toHaveAttribute("href", "/books");
    expect(screen.getByRole("link", { name: "Blog" })).toHaveAttribute("href", "/blog");
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute("href", "/about");

    const header = container.querySelector("header");
    expect(header?.className).toContain("bg-[color:var(--text)]/6");
    expect(container.innerHTML).not.toContain("max-w-4xl");
  });
});
