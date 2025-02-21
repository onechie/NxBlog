import AddBlogModal from "@/components/dashboard/add-blog-modal";
import BlogPagination from "@/components/dashboard/blog-pagination";
import { fetchUserBlogs } from "../lib/actions/blog";
import { Suspense } from "react";
import Loading from "@/components/ui/loading";
export default async function Dashboard() {
  const blogs = fetchUserBlogs();
  return (
    <div className="h-auto mx-auto w-auto max-w-7xl px-5 my-5 bg-gray-50">
      <AddBlogModal></AddBlogModal>
      <Suspense fallback={<Loading></Loading>}>
        <BlogPagination blogsPromise={blogs}></BlogPagination>
      </Suspense>
    </div>
  );
}
