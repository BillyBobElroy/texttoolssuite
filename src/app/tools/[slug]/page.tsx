export const dynamic = "force-dynamic";

import { toolComponents } from "@/lib/toolRegistry";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Sidebar from "@/components/navigation/Sidebar";
import ThreadedComments from "@/components/ui/ThreadedComments";

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { tools } = await import("@/lib/tools");
  const tool = tools.find((t) => t.slug === slug);

  if (!tool) return notFound();

  const ToolComponent = toolComponents[tool.slug];

  return (
    <>
      <Navbar />

      <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-x-8">
        {/* Sidebar */}
        <aside className="hidden sm:block w-64 shrink-0">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 space-y-10">
          {/* Tool Header */}
          <div className="space-y-3">
            <h1 className="text-4xl font-extrabold tracking-tight text-black">
              {tool.name}
            </h1>
            <p className="text-gray-600 text-base leading-relaxed">
              {tool.description}
            </p>
          </div>

          {/* Tool Component */}
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            {ToolComponent ? (
              <ToolComponent />
            ) : (
              <p className="text-gray-500 text-sm">Tool UI coming soon.</p>
            )}
          </div>
          <ThreadedComments slug={slug} />
        </main>
      </div>

      <Footer />
    </>
  );
}