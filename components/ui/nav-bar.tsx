import UserMenu from "./user-menu";
import { isAuthenticated } from "@/app/lib/actions/auth";
import Link from "next/link";

export default async function Navbar({ title }: { title: string }) {
  const isAuth = await isAuthenticated();
  return (
    <div className="bg-white w-full">
      <div className="h-16 mx-auto max-w-7xl flex justify-between items-center px-5 xl:px-0">
        <Link
          className="text-gray-800 font-bold text-2xl hover:scale-105 duration-300 ease-out "
          href={"/"}
        >
          NxBlog
        </Link>
        {isAuth ? (
          <UserMenu></UserMenu>
        ) : (
          <div className="flex gap-3 text-sm">
            <Link href="/login" className="p-2 bg-black text-gray-50">
              Login
            </Link>
            <Link
              href="/register"
              className="p-2 text-gray-800 border border-gray-800"
            >
              Register
            </Link>
          </div>
        )}
      </div>
      <div className="w-full bg-gray-900 h-20">
        <div className="mx-auto max-w-7xl h-full">
          <div className="w-full h-full flex items-center text-black justify-between px-5 xl:px-0">
            <h1 className="text-gray-200 text-2xl">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
