import Link from "next/link";
import { formatPostDate, type Post } from "@/lib/posts";

type PostTemplateProps = {
  post: Post;
};

export function PostTemplate({ post }: PostTemplateProps) {
  return (
    <article className="mx-auto w-full max-w-3xl space-y-6 px-4 py-10 sm:px-6">
      <Link
        href="/"
        className="inline-flex rounded-full border border-pink-200 px-4 py-2 text-sm font-medium text-pink-700 transition-colors hover:bg-pink-50"
      >
        Back to posts
      </Link>
      <header className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-wide text-pink-600">
          {formatPostDate(post.publishedAt)}
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
          {post.title}
        </h1>
        <p className="text-lg text-zinc-600">{post.excerpt}</p>
      </header>
      <p className="text-lg leading-8 text-zinc-700">{post.content}</p>
    </article>
  );
}
