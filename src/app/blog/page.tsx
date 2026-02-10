import { PostList } from "@/components/post-list";
import { getAllPosts } from "@/lib/blog";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900">Blog</h1>
      <p className="mt-3 max-w-2xl text-lg text-zinc-700">
        Read the latest updates, story drops, and behind-the-scenes writing notes.
      </p>
      <div className="mt-8">
        <PostList items={posts} />
      </div>
    </main>
  );
}
