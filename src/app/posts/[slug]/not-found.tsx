import Link from "next/link";

export default function PostNotFound() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-5 px-4 py-12 sm:px-6">
      <p className="inline-flex rounded-full bg-pink-100 px-3 py-1 text-sm font-semibold text-pink-700">
        Post not found
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
        This story entry does not exist
      </h1>
      <p className="text-lg text-zinc-700">
        The link may be outdated, or the post has moved to a new chapter path.
      </p>
      <Link
        href="/"
        className="inline-flex rounded-full border border-pink-200 px-4 py-2 text-sm font-semibold text-pink-700 transition-colors hover:bg-pink-50"
      >
        Return to homepage
      </Link>
    </main>
  );
}
