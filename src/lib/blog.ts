import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const BLOG_DIRECTORY = path.join(process.cwd(), "blog");

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

export type BlogPost = BlogPostMeta & {
  contentHtml: string;
};

function buildExcerpt(markdownBody: string) {
  const lines = markdownBody
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0 && !line.startsWith("#"));
  return lines[0] ?? "";
}

async function readMarkdownFile(slug: string) {
  const fullPath = path.join(BLOG_DIRECTORY, `${slug}.md`);
  return readFile(fullPath, "utf8");
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("en-AU", { dateStyle: "long" }).format(new Date(date));
}

export async function getAllPosts() {
  const fileNames = await readdir(BLOG_DIRECTORY);
  const posts = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const markdown = await readMarkdownFile(slug);
        const { data, content } = matter(markdown);

        return {
          slug,
          title: String(data.title ?? slug),
          date: String(data.date ?? "1970-01-01"),
          excerpt: String(data.excerpt ?? buildExcerpt(content)),
        } satisfies BlogPostMeta;
      }),
  );

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string) {
  try {
    const markdown = await readMarkdownFile(slug);
    const { data, content } = matter(markdown);
    const rendered = await remark().use(html).process(content);

    return {
      slug,
      title: String(data.title ?? slug),
      date: String(data.date ?? "1970-01-01"),
      excerpt: String(data.excerpt ?? buildExcerpt(content)),
      contentHtml: rendered.toString(),
    } satisfies BlogPost;
  } catch {
    return undefined;
  }
}

export async function getPostPreview() {
  const posts = await getAllPosts();
  return posts[0];
}
