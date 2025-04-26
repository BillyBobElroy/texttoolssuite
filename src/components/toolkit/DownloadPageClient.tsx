"use client";

import { useSearchParams } from "next/navigation";

export default function DownloadPageClient() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  return (
    <div className="max-w-2xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">Thanks for Your Purchase!</h1>
      {sessionId ? (
        <p className="text-gray-700">
          Your download is ready. Session ID: {sessionId}
        </p>
      ) : (
        <p className="text-gray-500">Waiting for session confirmation...</p>
      )}
      {/* You can add a download button here */}
    </div>
  );
}
