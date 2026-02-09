import Link from "next/link";
import { formatPostDate, type Post } from "@/lib/posts";

type PostListProps = {
  items: Post[];
};

export function PostList({ items }: PostListProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
        Latest posts
      </h2>
      <ul className="space-y-4">
        {items.map((post) => (
          <li
            key={post.slug}
            className="rounded-xl border border-pink-100 bg-white p-5 shadow-sm transition-colors hover:border-pink-300"
          >
            <Link
              href={`/posts/${post.slug}`}
              className="text-lg font-semibold text-zinc-900 hover:text-pink-600"
            >
              {post.title}
            </Link>
            <p className="mt-2 text-sm text-zinc-500">
              {formatPostDate(post.publishedAt)}
            </p>
            <p className="mt-3 text-zinc-700">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
