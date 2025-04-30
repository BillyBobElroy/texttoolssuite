import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import readingTime from "reading-time";
import type { ReactElement } from "react";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { visit } from "unist-util-visit";

export async function getPostBySlug(slug: string) {
  const filePath = path.join(process.cwd(), "src/content/blog", `${slug}.mdx`);
  const raw = await fs.readFile(filePath, "utf-8");

  const { content, data } = matter(raw);
  const readStats = readingTime(content);

  const headings: { text: string; level: number }[] = [];

  const compiled = await compileMDX({
    source: content,
    options: {
      mdxOptions: {
        rehypePlugins: [rehypeHighlight, rehypeSlug, rehypeAutolinkHeadings],
        remarkPlugins: [
          () => (tree) => {
            visit(tree, "heading", (node: any) => {
              const text = node.children
                .filter((n: any) => n.type === "text")
                .map((n: any) => n.value)
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
    Content: compiled.content as ReactElement,
    headings,
  };
}
