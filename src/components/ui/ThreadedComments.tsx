"use client";

import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { Trash } from "lucide-react";

type Comment = {
  id: string;
  parentId: string | null;
  text: string;
  name: string;
  createdAt: string;
  userId: string;
};

export default function ThreadedComments({ slug }: { slug: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [userId, setUserId] = useState("");

  const commentKey = `comments-${slug}`;
  const nameKey = `commenter-name`;
  const userIdKey = `comment-user-id`;

  // Load everything from localStorage
  useEffect(() => {
    const savedComments = localStorage.getItem(commentKey);
    if (savedComments) setComments(JSON.parse(savedComments));

    const savedName = localStorage.getItem(nameKey);
    if (savedName) setName(savedName);

    let storedUserId = localStorage.getItem(userIdKey);
    if (!storedUserId) {
      storedUserId = uuid();
      localStorage.setItem(userIdKey, storedUserId);
    }
    setUserId(storedUserId);
  }, [slug, commentKey, nameKey, userIdKey]);

  // Save comments
  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem(commentKey, JSON.stringify(comments));
    }
  }, [comments, commentKey]);

  // Save name
  useEffect(() => {
    if (name.trim()) {
      localStorage.setItem(nameKey, name.trim());
    }
  }, [name, nameKey]);

  const addComment = () => {
    if (!input.trim() || !name.trim()) return;

    const newComment: Comment = {
      id: uuid(),
      parentId: replyTo,
      text: input.trim(),
      name: name.trim(),
      createdAt: new Date().toISOString(),
      userId,
    };

    setComments([...comments, newComment]);
    setInput("");
    setReplyTo(null);
  };

  const deleteComment = (id: string) => {
    // Recursive delete all replies too
    const getAllDescendants = (parentId: string): string[] => {
      const children = comments.filter(c => c.parentId === parentId);
      return children.flatMap(child => [child.id, ...getAllDescendants(child.id)]);
    };
    const idsToDelete = [id, ...getAllDescendants(id)];
    setComments(comments.filter(c => !idsToDelete.includes(c.id)));
  };

  const renderComments = (parentId: string | null = null) => {
    return comments
      .filter(c => c.parentId === parentId)
      .map(c => (
        <div key={c.id} className="mt-4 pl-4 border-l">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-800 whitespace-pre-line">{c.text}</p>
              <div className="flex gap-2 mt-1 text-xs text-gray-500">
                <span className="font-semibold text-black">{c.name}</span>
                <span>{new Date(c.createdAt).toLocaleString()}</span>
                <button
                  onClick={() => setReplyTo(c.id)}
                  className="hover:underline text-blue-600"
                >
                  Reply
                </button>
              </div>
            </div>
            {c.userId === userId && (
              <button
                onClick={() => deleteComment(c.id)}
                className="text-gray-400 hover:text-red-500"
                title="Delete Comment"
              >
                <Trash className="w-4 h-4" />
              </button>
            )}
          </div>

          {renderComments(c.id)}
        </div>
      ));
  };

  return (
    <div className="mt-12">
      <h3 className="text-lg font-semibold mb-4">💬 Comments</h3>

      {renderComments()}

      <div className="mt-8 space-y-3">
        {replyTo && (
          <div className="text-sm text-gray-500">
            Replying to a comment...
            <button
              onClick={() => setReplyTo(null)}
              className="ml-2 underline text-red-500 text-xs"
            >
              Cancel
            </button>
          </div>
        )}

        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Your name"
          className="w-full border px-3 py-2 rounded-md text-sm"
        />

        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          rows={3}
          placeholder="Write your comment..."
          className="w-full border px-3 py-2 rounded-md text-sm"
        />

        <button
          onClick={addComment}
          className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800"
        >
          Post Comment
        </button>
      </div>
    </div>
  );
}