import Link from "next/link";
import type { Book } from "@/lib/books";

type UpcomingBookSectionProps = {
  book: Book;
};

export function UpcomingBookSection({ book }: UpcomingBookSectionProps) {
  return (
    <section className="rounded-2xl bg-[color:var(--primary)]/12 p-6 sm:p-8">
      <h2 className="inline-flex rounded-full bg-[color:var(--primary)]/25 px-3 py-1 text-sm font-semibold text-[color:var(--text)]">
        Upcoming book
      </h2>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-[color:var(--primary)] sm:text-5xl">
        {book.title}
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-[color:var(--text)]/90">{book.description}</p>
      <p className="mt-2 text-sm font-medium text-[color:var(--neutral)]">
        Expected release: {book.expectedRelease}
      </p>
      <Link
        href="/books"
        className="mt-5 inline-flex rounded-full bg-[color:var(--primary)] px-5 py-2.5 text-sm font-semibold text-[color:var(--text)] transition-colors hover:brightness-110"
      >
        View bibliography
      </Link>
    </section>
  );
}
