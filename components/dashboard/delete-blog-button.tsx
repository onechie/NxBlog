"use client";
import { useState } from "react";
import { deleteBlog } from "@/app/lib/actions/blog";

export default function DeleteBlogButton({ id }: { id: string }) {
  const [pending, setPending] = useState<boolean>(false);
  return (
    <button
      type="button"
      onClick={async () => {
        setPending(true);
        await deleteBlog(id);
        setPending(false);
      }}
      className="p-2 px-4 text-gray-800 border-gray-800 text-sm border disabled:bg-gray-200 w-[70px]"
      disabled={pending}
    >
      {pending ? "..." : "Delete"}
    </button>
  );
}
