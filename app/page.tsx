export const runtime = "edge";
import BlogPagination from "@/components/home/blog-pagination";
import { fetchPublicBlogs } from "./lib/actions/blog";
import { Suspense } from "react";
import Loading from "@/components/ui/loading";
import Navbar from "@/components/ui/nav-bar";

export default async function Home() {
  const blogs = fetchPublicBlogs();
  return (
    <div>
      <Navbar title={"Blogs"}></Navbar>
      <div className="h-auto mx-auto w-auto max-w-7xl my-5 bg-gray-50">
        <Suspense fallback={<Loading></Loading>}>
          <BlogPagination blogsPromise={blogs}></BlogPagination>
        </Suspense>
      </div>
    </div>
  );
  return;
}
