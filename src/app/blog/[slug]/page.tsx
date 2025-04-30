import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/getPostBySlug";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { meta } = await getPostBySlug(slug);
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return notFound();
  const { Content, meta, headings } = post;

  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-12 bg-white text-black">
      <div className="max-w-3xl w-full">

        <article className="prose prose-black prose-invert max-w-none mb-16">
          <h1 className="text-4xl font-bold mb-4">{meta.title}</h1>
          <p className="text-sm text-black">
            {new Date(meta.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            • {meta.readingTime}
          </p>
                  {/* Table of Contents */}
        {headings?.length > 0 && (
          <nav className="mb-8 border-l-4 border-gray-200 pl-4">
            <h2 className="text-sm font-semibold uppercase text-gray-500 mb-2">Table of Contents</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              {headings.map((heading, index) => (
                <li key={index} className={`ml-${(heading.level - 1) * 4}`}>
                  <a href={`#${heading.text.toLowerCase().replace(/\s+/g, "-")}`} className="hover:underline">
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
          <hr />
          {Content}
        </article>
      </div>
    </div>
  );
}