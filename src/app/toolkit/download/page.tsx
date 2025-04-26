import { Suspense } from "react";
import DownloadPageClient from "@/components/toolkit/DownloadPageClient";

export const dynamic = "force-dynamic";

export default function DownloadPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Suspense fallback={<div>Loading download page...</div>}>
        <DownloadPageClient />
      </Suspense>
    </main>
  );
}
