import { LatestPostSection } from "@/components/home/latest-post-section";
import { UpcomingBookSection } from "@/components/home/upcoming-book-section";
import { books } from "@/lib/books";
import { getPostPreview } from "@/lib/blog";

export default async function Home() {
  const latestPost = await getPostPreview();
  const upcomingBook = books[0];

  return (
    <main className="mx-auto w-full max-w-4xl space-y-8 px-4 py-12 sm:px-6">
      <UpcomingBookSection book={upcomingBook} />

      {latestPost ? (
        <LatestPostSection post={latestPost} />
      ) : null}
    </main>
  );
}
