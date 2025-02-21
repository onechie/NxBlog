"use client";
import { useState } from "react";
import ViewBlogModal from "./view-blog-modal";

type BlogCard = {
  title: string;
  content: string;
  author: string;
  created_at: string;
};
export default function BlogCard(props: BlogCard) {
  const { title, content, author, created_at } = props;
  const [viewModal, setViewModal] = useState<boolean>(false);

  return (
    <div className="border h-80 flex flex-col justify-between bg-white transition duration-200 hover:shadow-lg">
      <ViewBlogModal
        title={title}
        content={content}
        author={author}
        created_at={created_at}
        isOpen={viewModal}
        setIsOpen={setViewModal}
      ></ViewBlogModal>
      <div className="truncate mx-5 py-2 border-b text-gray-800 font-bold">
        {title}
      </div>
      <p className="truncate text-wrap mx-5 flex-1 my-2 text-gray-600 text-sm">
        {content}
      </p>
      <div className="mx-5 py-3 border-t text-xs text-gray-800 flex gap-3 justify-between">
        <p className="font-bold">{author}</p>
        <p
          className="underline text-blue-500 hover:text-gray-500 hover:cursor-pointer"
          onClick={() => setViewModal(true)}
        >
          View more
        </p>
      </div>
    </div>
  );
}
