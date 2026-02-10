import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";

describe("Home page", () => {
  it("shows upcoming book and latest post excerpt", async () => {
    const page = await Home();
    render(page);

    expect(screen.getByRole("heading", { name: "Upcoming book" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Latest from the blog" })).toBeInTheDocument();
    expect(screen.getByText("A short intro to my first post.")).toBeInTheDocument();
  });
});
