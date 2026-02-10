import Link from "next/link";
import { books } from "@/lib/books";
import { formatPostDate, getPostPreview } from "@/lib/blog";

export default async function Home() {
  const latestPost = await getPostPreview();
  const upcomingBook = books[0];

  return (
    <main className="mx-auto w-full max-w-4xl space-y-8 px-4 py-12 sm:px-6">
      <section className="rounded-2xl border border-[color:var(--neutral)]/35 bg-[color:var(--background)] p-6 shadow-sm shadow-black/30 sm:p-8">
        <h2 className="inline-flex rounded-full bg-[color:var(--primary)]/20 px-3 py-1 text-sm font-semibold text-[color:var(--text)]">
          Upcoming book
        </h2>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-[color:var(--primary)] sm:text-5xl">
          {upcomingBook.title}
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-[color:var(--text)]/90">{upcomingBook.description}</p>
        <p className="mt-2 text-sm font-medium text-[color:var(--neutral)]">
          Expected release: {upcomingBook.expectedRelease}
        </p>
        <Link
          href="/books"
          className="mt-5 inline-flex rounded-full bg-[color:var(--primary)] px-5 py-2.5 text-sm font-semibold text-[color:var(--text)] transition-colors hover:brightness-110"
        >
          View bibliography
        </Link>
      </section>

      {latestPost ? (
        <section className="rounded-2xl border border-[color:var(--neutral)]/35 bg-[color:var(--background)] p-6 shadow-sm shadow-black/30 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--text)]">
            Latest from the blog
          </h2>
          <p className="mt-2 text-sm text-[color:var(--neutral)]">{formatPostDate(latestPost.date)}</p>
          <h3 className="mt-3 text-xl font-semibold text-[color:var(--text)]">{latestPost.title}</h3>
          <p className="mt-3 text-[color:var(--text)]/90">{latestPost.excerpt}</p>
          <Link
            href={`/blog/${latestPost.slug}`}
            className="mt-4 inline-flex rounded-full border border-[color:var(--neutral)]/45 px-4 py-2 text-sm font-semibold text-[color:var(--primary)] transition-colors hover:bg-[color:var(--primary)]/10"
          >
            Read latest post
          </Link>
        </section>
      ) : null}
    </main>
  );
}
