import Link from "next/link";
import { formatPostDate, type BlogPostMeta } from "@/lib/blog";

type LatestPostSectionProps = {
  post: BlogPostMeta;
};

export function LatestPostSection({ post }: LatestPostSectionProps) {
  return (
    <section className="w-full bg-[color:var(--text)]/5 px-4 py-12 sm:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--text)]">
          Latest from the blog
        </h2>
        <p className="mt-2 text-sm text-[color:var(--neutral)]">{formatPostDate(post.date)}</p>
        <h3 className="mt-3 text-xl font-semibold text-[color:var(--text)]">{post.title}</h3>
        <p className="mt-3 text-[color:var(--text)]/90">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 inline-flex bg-[color:var(--background)] px-4 py-2 text-sm font-semibold text-[color:var(--primary)] transition-colors hover:bg-[color:var(--primary)]/10"
        >
          Read latest post
        </Link>
      </div>
    </section>
  );
}
