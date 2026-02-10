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
        className="inline-flex border border-[color:var(--neutral)]/45 px-4 py-2 text-sm font-medium text-[color:var(--primary)] transition-colors hover:bg-[color:var(--primary)]/10"
      >
        Back to blog
      </Link>
      <header className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-wide text-[color:var(--primary)]">
          {formatPostDate(post.date)}
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-[color:var(--text)]">
          {post.title}
        </h1>
        <p className="text-lg text-[color:var(--neutral)]">{post.excerpt}</p>
      </header>
      <div
        className="prose prose-invert max-w-none text-lg leading-8 prose-headings:text-[color:var(--text)] prose-a:text-[color:var(--primary)]"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
