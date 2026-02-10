import { LatestPostSection } from "@/components/home/latest-post-section";
import { UpcomingBookSection } from "@/components/home/upcoming-book-section";
import { books } from "@/lib/books";
import { getPostPreview } from "@/lib/blog";

export default async function Home() {
  const latestPost = await getPostPreview();
  const upcomingBook = books[0];

  return (
    <main className="w-full space-y-0">
      <UpcomingBookSection book={upcomingBook} />

      {latestPost ? (
        <LatestPostSection post={latestPost} />
      ) : null}
    </main>
  );
}
