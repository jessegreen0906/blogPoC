import Link from "next/link";

export default function BlogPostNotFound() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-5 px-4 py-12 sm:px-6">
      <p className="inline-flex bg-[color:var(--primary)]/20 px-3 py-1 text-sm font-semibold text-[color:var(--text)]">
        Post not found
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-[color:var(--primary)]">
        This blog entry could not be found
      </h1>
      <p className="text-lg text-[color:var(--text)]/90">
        The link may be outdated, or this post has moved.
      </p>
      <Link
        href="/blog"
        className="inline-flex border border-[color:var(--neutral)]/45 px-4 py-2 text-sm font-semibold text-[color:var(--primary)] transition-colors hover:bg-[color:var(--primary)]/10"
      >
        Return to blog
      </Link>
    </main>
  );
}
