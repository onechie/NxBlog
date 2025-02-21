import { isAuthenticated } from "@/app/lib/actions/auth";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuth = await isAuthenticated();
  if (isAuth) redirect("/dashboard");
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-gray-50">
      <div className="flex justify-center mb-10 text-gray-800 font-bold text-4xl">
        NxBlog
      </div>
      {children}
    </div>
  );
}
