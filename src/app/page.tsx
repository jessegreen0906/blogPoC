import Link from "next/link";
import { books } from "@/lib/books";
import { formatPostDate, getPostPreview } from "@/lib/blog";

export default async function Home() {
  const latestPost = await getPostPreview();
  const upcomingBook = books[0];

  return (
    <main className="mx-auto w-full max-w-4xl space-y-8 px-4 py-12 sm:px-6">
      <section className="rounded-2xl border border-pink-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="inline-flex rounded-full bg-pink-100 px-3 py-1 text-sm font-semibold text-pink-700">
          Upcoming book
        </h2>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          {upcomingBook.title}
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-zinc-700">{upcomingBook.description}</p>
        <p className="mt-2 text-sm font-medium text-zinc-500">
          Expected release: {upcomingBook.expectedRelease}
        </p>
        <Link
          href="/books"
          className="mt-5 inline-flex rounded-full bg-pink-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-pink-700"
        >
          View bibliography
        </Link>
      </section>

      {latestPost ? (
        <section className="rounded-2xl border border-pink-100 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
            Latest from the blog
          </h2>
          <p className="mt-2 text-sm text-zinc-500">{formatPostDate(latestPost.date)}</p>
          <h3 className="mt-3 text-xl font-semibold text-zinc-900">{latestPost.title}</h3>
          <p className="mt-3 text-zinc-700">{latestPost.excerpt}</p>
          <Link
            href={`/blog/${latestPost.slug}`}
            className="mt-4 inline-flex rounded-full border border-pink-200 px-4 py-2 text-sm font-semibold text-pink-700 transition-colors hover:bg-pink-50"
          >
            Read latest post
          </Link>
        </section>
      ) : null}

      <section className="rounded-2xl border border-pink-100 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
          Email newsletter signup
        </h2>
        <p className="mt-3 text-zinc-700">
          Get chapter drops, release news, and fan updates sent directly to your inbox.
        </p>
        <form className="mt-5 flex flex-col gap-3 sm:flex-row" action="#">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Email address"
            className="w-full rounded-full border border-zinc-300 px-4 py-2.5 text-zinc-900 outline-none ring-pink-400 placeholder:text-zinc-400 focus:ring-2"
          />
          <button
            type="submit"
            className="rounded-full bg-pink-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-pink-700"
          >
            Subscribe
          </button>
        </form>
      </section>
    </main>
  );
}
