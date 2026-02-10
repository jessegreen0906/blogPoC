import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { GatewatchSignupForm } from "@/components/gatewatch-signup-form";

describe("GatewatchSignupForm", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("renders the Join the Gatewatch form", () => {
    render(<GatewatchSignupForm />);

    expect(screen.getByRole("heading", { name: "Join the Gatewatch" })).toBeInTheDocument();
    expect(screen.getByLabelText("Email address")).toHaveAttribute("type", "email");
    expect(screen.getByRole("button", { name: "Subscribe" })).toBeInTheDocument();
  });

  it("shows an error and does not log for invalid email", () => {
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    render(<GatewatchSignupForm />);

    fireEvent.change(screen.getByLabelText("Email address"), {
      target: { value: "not-an-email" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Subscribe" }));

    expect(screen.getByRole("alert")).toHaveTextContent("Please enter a valid email address.");
    expect(logSpy).not.toHaveBeenCalled();
  });

  it("logs submitted email when valid", () => {
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    render(<GatewatchSignupForm />);

    fireEvent.change(screen.getByLabelText("Email address"), {
      target: { value: "reader@example.com" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Subscribe" }));

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("You are on the Gatewatch list.");
    expect(screen.getByLabelText("Email address")).toHaveValue("");
    expect(logSpy).toHaveBeenCalledWith("Gatewatch signup submitted", "reader@example.com");
  });
});
