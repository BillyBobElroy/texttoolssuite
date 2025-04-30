import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { compileMDX, CompileMDXResult } from "next-mdx-remote/rsc";
import readingTime from "reading-time";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { visit } from "unist-util-visit";
import type { Heading } from "mdast"; // for proper heading type

type Frontmatter = {
  title: string;
  date: string;
  slug?: string;
  description: string;
};

export async function getPostBySlug(slug: string) {
  const filePath = path.join(process.cwd(), "src/content/blog", `${slug}.mdx`);
  const raw = await fs.readFile(filePath, "utf-8");

  const { content, data } = matter(raw);
  const readStats = readingTime(content);

  const headings: { text: string; level: number }[] = [];

  const compiled: CompileMDXResult<Frontmatter> = await compileMDX<Frontmatter>({
    source: content,
    options: {
      mdxOptions: {
        rehypePlugins: [rehypeHighlight, rehypeSlug, rehypeAutolinkHeadings],
        remarkPlugins: [
          () => (tree) => {
            visit(tree, "heading", (node: Heading) => {
              const text = node.children
                .filter((n): n is { type: "text"; value: string } => n.type === "text")
                .map((n) => n.value)
                .join("");
              if (text) {
                headings.push({ level: node.depth, text });
              }
            });
          },
        ],
      },
    },
  });

  return {
    meta: {
      title: data.title,
      date: data.date,
      slug,
      description: data.description,
      readingTime: readStats.text,
    },
    Content: compiled.content,
    headings,
  };
}
