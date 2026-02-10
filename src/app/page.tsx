import { LatestPostSection } from "@/components/home/latest-post-section";
import { UpcomingBookSection } from "@/components/home/upcoming-book-section";
import { books } from "@/lib/books";
import { getPostPreview } from "@/lib/blog";

export default async function Home() {
  const latestPost = await getPostPreview();
  const upcomingBook = books[0];

  return (
    <main className="flex min-h-full w-full flex-col">
      <UpcomingBookSection book={upcomingBook} />

      {latestPost ? (
        <LatestPostSection post={latestPost} />
      ) : null}
    </main>
  );
}
