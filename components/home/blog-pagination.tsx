"use client";
import { use, useState } from "react";
import BlogCard from "./blog-card";
import PaginationButtons from "../ui/pagination-buttons";

type Blog = {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  authors: any;
};
type BlogsPromise = {
  success: boolean;
  message: string;
  blogs: Blog[];
};
export default function BlogPagination({
  blogsPromise,
}: {
  blogsPromise: Promise<BlogsPromise>;
}) {
  const blogsData = use(blogsPromise);
  const blogs = blogsData.blogs;

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 8;

  const lastIndex = currentPage * blogsPerPage;
  const firstIndex = lastIndex - blogsPerPage;
  const currentBlogs = blogs.slice(firstIndex, lastIndex);

  return (
    <div className="mx-auto w-auto max-w-7xl">
      <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:px-0 mb-5">
        {currentBlogs?.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            content={blog.content}
            author={blog.authors.display_name || "Uknown"}
            created_at={blog.created_at}
          ></BlogCard>
        ))}
      </div>
      <PaginationButtons
        items_per_page={blogsPerPage}
        items={blogs}
        page={currentPage}
        set_page={setCurrentPage}
      ></PaginationButtons>
    </div>
  );
}
