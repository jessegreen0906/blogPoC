"use client";

import { FormEvent, useState } from "react";
import { isValidEmail, normalizeEmail } from "@/lib/email";

export function GatewatchSignupForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalizedEmail = normalizeEmail(email);

    if (!isValidEmail(normalizedEmail)) {
      setError("Please enter a valid email address.");
      setSuccessMessage("");
      return;
    }

    let response: Response;
    try {
      response = await fetch("/api/subscriptions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: normalizedEmail }),
      });
    } catch {
      setError("Unable to save subscription.");
      setSuccessMessage("");
      return;
    }

    if (!response.ok) {
      const data = (await response.json().catch(() => null)) as { error?: string } | null;
      setError(data?.error ?? "Unable to save subscription.");
      setSuccessMessage("");
      return;
    }

    setError("");
    setSuccessMessage("You are on the Gatewatch list.");
    console.log("Gatewatch signup submitted", normalizedEmail);
    setEmail("");
  };

  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--text)]">
        Join the Gatewatch
      </h2>
      <p className="mt-3 text-[color:var(--text)]/90">
        Join the list for chapter drops, release news, and fan updates.
      </p>
      <form
        className="mt-5 flex flex-col gap-3 sm:flex-row"
        action="#"
        noValidate
        onSubmit={handleSubmit}
      >
        <label htmlFor="footer-email" className="sr-only">
          Email address
        </label>
        <input
          id="footer-email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email address"
          className="w-full border border-[color:var(--neutral)]/55 bg-transparent px-4 py-2.5 text-[color:var(--text)] outline-none ring-[color:var(--primary)] placeholder:text-[color:var(--neutral)] focus:ring-2"
        />
        <button
          type="submit"
          className="bg-[color:var(--primary)] px-5 py-2.5 text-sm font-semibold text-[color:var(--text)] transition-colors hover:brightness-110"
        >
          Subscribe
        </button>
      </form>
      {error ? (
        <p role="alert" className="mt-3 text-sm font-semibold text-[color:var(--primary)]">
          {error}
        </p>
      ) : null}
      {successMessage ? (
        <p role="status" className="mt-3 text-sm font-semibold text-[color:var(--text)]">
          {successMessage}
        </p>
      ) : null}
    </section>
  );
}
