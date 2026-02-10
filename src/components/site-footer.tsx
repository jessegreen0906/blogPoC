import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-[color:var(--neutral)]/35 bg-[color:var(--background)]">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-3 px-4 py-6 text-sm text-[color:var(--neutral)] sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© 2026 Jay Westgate. All rights reserved.</p>
        <Link
          href="mailto:hello@jaywestgate.com"
          className="font-medium text-[color:var(--primary)] hover:text-[color:var(--text)]"
        >
          Contact
        </Link>
      </div>
    </footer>
  );
}
