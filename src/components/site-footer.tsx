import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-pink-100 bg-white">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-3 px-4 py-6 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© 2026 Jay Westgate. All rights reserved.</p>
        <Link
          href="mailto:hello@jaywestgate.com"
          className="font-medium text-pink-700 hover:text-pink-800"
        >
          Contact
        </Link>
      </div>
    </footer>
  );
}
