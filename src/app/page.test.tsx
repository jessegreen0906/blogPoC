import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";

describe("Home page", () => {
  it("shows upcoming book and latest post excerpt in full-width matte layout", async () => {
    const page = await Home();
    const { container } = render(page);
    const main = container.querySelector("main");

    expect(main).not.toBeNull();
    expect(main?.className).toContain("w-full");
    expect(main?.className).toContain("min-h-full");
    expect(main?.className).toContain("flex");
    expect(main?.className).not.toContain("max-w");
    expect(container.innerHTML).not.toContain("rounded-");
    expect(screen.getByRole("heading", { name: "Upcoming book" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Latest from the blog" })).toBeInTheDocument();
    expect(screen.getByText("A short intro to my first post.")).toBeInTheDocument();
  });
});
