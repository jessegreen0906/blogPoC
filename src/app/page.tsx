import { PostList } from "@/components/post-list";
import { posts } from "@/lib/posts";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-4 py-12 sm:px-6">
      <section className="mb-10 space-y-3">
        <p className="inline-flex rounded-full bg-pink-100 px-3 py-1 text-sm font-semibold text-pink-700">
          Jay Westgate Blog
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          Fresh updates from the Storyverse
        </h1>
        <p className="max-w-2xl text-lg text-zinc-600">
          New chapters, fan-first insights, and behind-the-scenes notes.
        </p>
      </section>
      <PostList items={posts} />
    </main>
  );
}
