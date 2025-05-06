import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "src/content/blog");

export type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  summary: string;
};

export async function getAllPosts(): Promise<Post[]> {
  try {
    const files = await fs.readdir(postsDir);

    const posts = await Promise.all(
      files.map(async (file: string): Promise<Post> => {
        const filePath = path.join(postsDir, file);
        const raw = await fs.readFile(filePath, "utf-8");
        const { data } = matter(raw);

        return {
          slug: data.slug || file.replace(/\.mdx$/, ""),
          title: data.title,
          date: data.date,
          description: data.description,
          summary: data.summary,
        };
      })
    );

    return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") {
      console.warn("⚠️ No blog directory found at:", postsDir);
      return [];
    }
    throw err;
  }
}