import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SiteHeader } from "@/components/site-header";

describe("SiteHeader", () => {
  it("renders brand title and navigation links", () => {
    render(<SiteHeader />);

    expect(screen.getByRole("link", { name: "Jay Westgate" })).toHaveAttribute(
      "href",
      "/",
    );
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute("href", "/about");
  });
});
