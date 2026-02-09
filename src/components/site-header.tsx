import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-pink-100 bg-white/95">
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-zinc-900 hover:text-pink-700"
        >
          Jay Westgate
        </Link>
        <nav aria-label="Primary navigation" className="flex items-center gap-3 text-sm">
          <Link
            href="/"
            className="rounded-full px-3 py-1.5 font-medium text-zinc-700 transition-colors hover:bg-pink-100 hover:text-pink-700"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="rounded-full px-3 py-1.5 font-medium text-zinc-700 transition-colors hover:bg-pink-100 hover:text-pink-700"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
