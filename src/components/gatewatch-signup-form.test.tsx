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
    const fetchSpy = vi.spyOn(global, "fetch");
    render(<GatewatchSignupForm />);

    fireEvent.change(screen.getByLabelText("Email address"), {
      target: { value: "not-an-email" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Subscribe" }));

    expect(screen.getByRole("alert")).toHaveTextContent("Please enter a valid email address.");
    expect(logSpy).not.toHaveBeenCalled();
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it("submits email to API and logs success when valid", async () => {
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    vi.spyOn(global, "fetch").mockResolvedValue(
      new Response(JSON.stringify({ ok: true }), { status: 200 }),
    );
    render(<GatewatchSignupForm />);

    fireEvent.change(screen.getByLabelText("Email address"), {
      target: { value: "reader@example.com" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Subscribe" }));

    expect(global.fetch).toHaveBeenCalledWith("/api/subscriptions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "reader@example.com" }),
    });
    expect(await screen.findByRole("status")).toHaveTextContent("You are on the Gatewatch list.");
    expect(screen.getByLabelText("Email address")).toHaveValue("");
    expect(logSpy).toHaveBeenCalledWith("Gatewatch signup submitted", "reader@example.com");
  });

  it("shows error when API returns failure", async () => {
    vi.spyOn(global, "fetch").mockResolvedValue(
      new Response(
        JSON.stringify({
          error: "Unable to save subscription. Please check datastore configuration and permissions.",
        }),
        {
        status: 500,
      },
      ),
    );
    render(<GatewatchSignupForm />);

    fireEvent.change(screen.getByLabelText("Email address"), {
      target: { value: "reader@example.com" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Subscribe" }));

    expect(await screen.findByRole("alert")).toHaveTextContent(
      "Unable to save subscription. Please check datastore configuration and permissions.",
    );
  });
});
