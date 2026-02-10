import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";

describe("Home page", () => {
  it("shows upcoming book, latest post excerpt, and newsletter signup", async () => {
    const page = await Home();
    render(page);

    expect(screen.getByRole("heading", { name: "Upcoming book" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Latest from the blog" })).toBeInTheDocument();
    expect(screen.getByText("A short intro to my first post.")).toBeInTheDocument();
    expect(screen.getByLabelText("Email address")).toHaveAttribute("type", "email");
    expect(screen.getByRole("button", { name: "Subscribe" })).toBeInTheDocument();
  });
});
