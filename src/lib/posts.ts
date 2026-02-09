export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "launch-day",
    title: "Launch Day: Welcome to the Storyverse",
    excerpt:
      "A quick intro to the world, the characters, and what fans can expect next.",
    publishedAt: "2026-02-10",
    content:
      "Today we launch the Storyverse with bold energy and fan-first updates. Expect regular lore drops, character spotlights, and behind-the-scenes notes from Jay Westgate.",
  },
  {
    slug: "writing-rhythm",
    title: "Building a Writing Rhythm That Ships",
    excerpt:
      "How weekly creative momentum keeps chapters moving from notes to finished scenes.",
    publishedAt: "2026-01-25",
    content:
      "Consistency wins. Small sessions stack fast when your process is clear. The goal is simple: keep the story moving and keep readers excited for each release.",
  },
  {
    slug: "fan-questions",
    title: "Fan Questions: Origins, Powers, and Plot Twists",
    excerpt:
      "Answering the top community questions without spoiling upcoming reveals.",
    publishedAt: "2026-01-12",
    content:
      "Fans asked for deeper lore and sharper answers. This post covers origins and power systems while keeping major twists under wraps for maximum impact.",
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("en-AU", { dateStyle: "long" }).format(
    new Date(date),
  );
}
