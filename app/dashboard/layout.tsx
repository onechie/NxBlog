import Navbar from "@/components/ui/nav-bar";
import { isAuthenticated } from "@/app/lib/actions/auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuth = await isAuthenticated();
  if (!isAuth) redirect("/login");
  return (
    <div className="h-screen w-full bg-gray-50">
      <Navbar title={"Dashboard"}></Navbar>
      {children}
    </div>
  );
}
