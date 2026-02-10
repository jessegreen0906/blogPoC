 "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isBooks = pathname.startsWith("/books");
  const isBlog = pathname.startsWith("/blog");
  const isAbout = pathname === "/about";

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
            aria-current={isHome ? "page" : undefined}
            className={`rounded-full px-3 py-1.5 font-medium transition-colors ${
              isHome
                ? "bg-pink-100 text-pink-700"
                : "text-zinc-700 hover:bg-pink-100 hover:text-pink-700"
            }`}
          >
            Home
          </Link>
          <Link
            href="/books"
            aria-current={isBooks ? "page" : undefined}
            className={`rounded-full px-3 py-1.5 font-medium transition-colors ${
              isBooks
                ? "bg-pink-100 text-pink-700"
                : "text-zinc-700 hover:bg-pink-100 hover:text-pink-700"
            }`}
          >
            Books
          </Link>
          <Link
            href="/blog"
            aria-current={isBlog ? "page" : undefined}
            className={`rounded-full px-3 py-1.5 font-medium transition-colors ${
              isBlog
                ? "bg-pink-100 text-pink-700"
                : "text-zinc-700 hover:bg-pink-100 hover:text-pink-700"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/about"
            aria-current={isAbout ? "page" : undefined}
            className={`rounded-full px-3 py-1.5 font-medium transition-colors ${
              isAbout
                ? "bg-pink-100 text-pink-700"
                : "text-zinc-700 hover:bg-pink-100 hover:text-pink-700"
            }`}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
