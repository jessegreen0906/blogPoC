import Link from "next/link";
import { formatPostDate, type BlogPost } from "@/lib/blog";

type PostTemplateProps = {
  post: BlogPost;
};

export function PostTemplate({ post }: PostTemplateProps) {
  return (
    <article className="mx-auto w-full max-w-3xl space-y-6 px-4 py-10 sm:px-6">
      <Link
        href="/blog"
        className="inline-flex rounded-full border border-pink-200 px-4 py-2 text-sm font-medium text-pink-700 transition-colors hover:bg-pink-50"
      >
        Back to blog
      </Link>
      <header className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-wide text-pink-600">
          {formatPostDate(post.date)}
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
          {post.title}
        </h1>
        <p className="text-lg text-zinc-600">{post.excerpt}</p>
      </header>
      <div
        className="prose prose-zinc max-w-none text-lg leading-8"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
