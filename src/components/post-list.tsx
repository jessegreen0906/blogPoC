import Link from "next/link";
import { formatPostDate, type BlogPostMeta } from "@/lib/blog";

type PostListProps = {
  items: BlogPostMeta[];
};

export function PostList({ items }: PostListProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--text)]">
        Latest posts
      </h2>
      <ul className="space-y-4">
        {items.map((post) => (
          <li
            key={post.slug}
            className="border border-[color:var(--neutral)]/35 bg-[color:var(--background)] p-5 shadow-sm shadow-black/25 transition-colors hover:border-[color:var(--primary)]"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="text-lg font-semibold text-[color:var(--text)] hover:text-[color:var(--primary)]"
            >
              {post.title}
            </Link>
            <p className="mt-2 text-sm text-[color:var(--neutral)]">
              {formatPostDate(post.date)}
            </p>
            <p className="mt-3 text-[color:var(--text)]/90">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
