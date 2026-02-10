import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-[color:var(--neutral)]/35 bg-[color:var(--background)]">
      <div className="mx-auto grid w-full max-w-4xl gap-8 px-4 py-8 text-sm text-[color:var(--neutral)] sm:px-6 md:grid-cols-2">
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--text)]">
            The Gatewatch
          </h2>
          <p className="mt-3 text-[color:var(--text)]/90">
            Join the list for chapter drops, release news, and fan updates.
          </p>
          <form className="mt-5 flex flex-col gap-3 sm:flex-row" action="#">
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              name="email"
              type="email"
              required
              placeholder="Email address"
              className="w-full rounded-full border border-[color:var(--neutral)]/55 bg-transparent px-4 py-2.5 text-[color:var(--text)] outline-none ring-[color:var(--primary)] placeholder:text-[color:var(--neutral)] focus:ring-2"
            />
            <button
              type="submit"
              className="rounded-full bg-[color:var(--primary)] px-5 py-2.5 text-sm font-semibold text-[color:var(--text)] transition-colors hover:brightness-110"
            >
              Subscribe
            </button>
          </form>
        </section>

        <section className="space-y-3 md:justify-self-end">
          <h3 className="text-lg font-semibold text-[color:var(--text)]">Social</h3>
          <div className="flex flex-wrap gap-3">
            <Link
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[color:var(--neutral)]/55 px-3 py-1.5 font-medium text-[color:var(--primary)] transition-colors hover:bg-[color:var(--primary)]/10"
            >
              TikTok
            </Link>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[color:var(--neutral)]/55 px-3 py-1.5 font-medium text-[color:var(--primary)] transition-colors hover:bg-[color:var(--primary)]/10"
            >
              Instagram
            </Link>
            <Link
              href="https://bsky.app"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[color:var(--neutral)]/55 px-3 py-1.5 font-medium text-[color:var(--primary)] transition-colors hover:bg-[color:var(--primary)]/10"
            >
              Bluesky
            </Link>
          </div>
          <p>Accounts coming soon</p>
          <div className="pt-2">
            <p>© 2026 Jay Westgate. All rights reserved.</p>
            <Link
              href="mailto:hello@jaywestgate.com"
              className="font-medium text-[color:var(--primary)] hover:text-[color:var(--text)]"
            >
              Contact
            </Link>
          </div>
        </section>
      </div>
    </footer>
  );
}
