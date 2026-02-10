import Link from "next/link";
import { GatewatchSignupForm } from "@/components/gatewatch-signup-form";

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-[color:var(--neutral)]/45 bg-[color:var(--text)]/10">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-8 text-sm text-[color:var(--neutral)] sm:px-10 md:grid-cols-2">
        <GatewatchSignupForm />

        <section className="space-y-3 md:justify-self-end">
          <h3 className="text-lg font-semibold text-[color:var(--text)]">Social</h3>
          <div className="flex flex-wrap gap-3">
            <Link
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[color:var(--neutral)]/55 px-3 py-1.5 font-medium text-[color:var(--primary)] transition-colors hover:bg-[color:var(--primary)]/10"
            >
              TikTok
            </Link>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[color:var(--neutral)]/55 px-3 py-1.5 font-medium text-[color:var(--primary)] transition-colors hover:bg-[color:var(--primary)]/10"
            >
              Instagram
            </Link>
            <Link
              href="https://bsky.app"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[color:var(--neutral)]/55 px-3 py-1.5 font-medium text-[color:var(--primary)] transition-colors hover:bg-[color:var(--primary)]/10"
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
