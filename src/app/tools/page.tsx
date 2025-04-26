import { Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AllToolsClient from "@/components/tools/AllToolsClient"; // ✅ new client component

export const dynamic = "force-dynamic";

export default function AllToolsPage() {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-black">All Text Tools</h1>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Explore free online tools for text cleanup, formatting, SEO optimization, and more.
          </p>
        </div>

        <Suspense fallback={<div className="text-center">Loading tools...</div>}>
          <AllToolsClient />
        </Suspense>
      </div>
      <Footer />
    </>
  );
}
