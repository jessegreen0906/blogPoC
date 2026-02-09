import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SiteFooter } from "@/components/site-footer";

describe("SiteFooter", () => {
  it("renders copyright and a contact link", () => {
    render(<SiteFooter />);

    expect(screen.getByText(/Jay Westgate/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute(
      "href",
      "mailto:hello@jaywestgate.com",
    );
  });
});
