import { notFound } from "next/navigation";
import { PostTemplate } from "@/components/post-template";
import { getPostBySlug, posts } from "@/lib/posts";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <PostTemplate post={post} />;
}
