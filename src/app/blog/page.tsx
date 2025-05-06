// app/blog/page.tsx
import Link from "next/link";
import { getAllPosts } from "@/lib/getAllPosts";

export const metadata = {
  title: "Blog | Text Tools Suite",
  description: "Tips and guides on text formatting, SEO, productivity, and writing tools.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-16 bg-white text-black">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Text Tools Blog</h1>
        <p className="text-gray-600 text-base max-w-xl mx-auto">
          Tips, guides, and insights on text formatting, productivity, and writing for the web.
        </p>
      </div>

      <div className="w-full max-w-3xl space-y-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md hover:bg-pastel-blue/10 transition"
          >
            <h2 className="text-xl font-semibold text-black mb-1">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-2">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
            </p>
            <p className="text-gray-700 leading-relaxed">{post.summary}</p>
            <p className="text-sm text-gray-700">{post.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}