 "use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isBooks = pathname.startsWith("/books");
  const isBlog = pathname.startsWith("/blog");
  const isAbout = pathname === "/about";

  return (
    <header className="border-b border-[color:var(--neutral)]/45 bg-[color:var(--text)]/6">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-10">
        <Link
          href="/"
          className="inline-flex items-center text-lg font-bold tracking-tight text-[color:var(--text)] hover:text-[color:var(--primary)]"
        >
          <Image
            src="/media/images/sig_magenta.png"
            alt="Jay Westgate logo"
            width={160}
            height={48}
            priority
          />
        </Link>
        <nav aria-label="Primary navigation" className="flex items-center gap-3 text-sm">
          <Link
            href="/"
            aria-current={isHome ? "page" : undefined}
            className={`px-3 py-1.5 font-medium transition-colors ${
              isHome
                ? "bg-[color:var(--primary)] text-[color:var(--text)]"
                : "text-[color:var(--neutral)] hover:bg-[color:var(--primary)]/15 hover:text-[color:var(--text)]"
            }`}
          >
            Home
          </Link>
          <Link
            href="/books"
            aria-current={isBooks ? "page" : undefined}
            className={`px-3 py-1.5 font-medium transition-colors ${
              isBooks
                ? "bg-[color:var(--primary)] text-[color:var(--text)]"
                : "text-[color:var(--neutral)] hover:bg-[color:var(--primary)]/15 hover:text-[color:var(--text)]"
            }`}
          >
            Books
          </Link>
          <Link
            href="/blog"
            aria-current={isBlog ? "page" : undefined}
            className={`px-3 py-1.5 font-medium transition-colors ${
              isBlog
                ? "bg-[color:var(--primary)] text-[color:var(--text)]"
                : "text-[color:var(--neutral)] hover:bg-[color:var(--primary)]/15 hover:text-[color:var(--text)]"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/about"
            aria-current={isAbout ? "page" : undefined}
            className={`px-3 py-1.5 font-medium transition-colors ${
              isAbout
                ? "bg-[color:var(--primary)] text-[color:var(--text)]"
                : "text-[color:var(--neutral)] hover:bg-[color:var(--primary)]/15 hover:text-[color:var(--text)]"
            }`}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
