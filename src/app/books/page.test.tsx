import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import BooksPage from "@/app/books/page";

describe("Books page", () => {
  it("renders bibliography content with a coming soon title", () => {
    render(<BooksPage />);

    expect(screen.getByRole("heading", { name: "Bibliography" })).toBeInTheDocument();
    expect(screen.getByText("Coming soon")).toBeInTheDocument();
  });
});
