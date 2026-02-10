import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SiteFooter } from "@/components/site-footer";

describe("SiteFooter", () => {
  it("renders gatewatch signup and social links", () => {
    const { container } = render(<SiteFooter />);

    expect(screen.getByRole("heading", { name: "Join the Gatewatch" })).toBeInTheDocument();
    expect(screen.getByLabelText("Email address")).toHaveAttribute("type", "email");
    expect(screen.getByRole("button", { name: "Subscribe" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "TikTok" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Instagram" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Bluesky" })).toBeInTheDocument();
    expect(screen.getByText("Accounts coming soon")).toBeInTheDocument();
    expect(screen.getByText(/Jay Westgate/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute(
      "href",
      "mailto:hello@jaywestgate.com",
    );

    const footer = container.querySelector("footer");
    expect(footer?.className).toContain("bg-[color:var(--text)]/10");
    expect(container.innerHTML).toContain("max-w-6xl");
  });
});
