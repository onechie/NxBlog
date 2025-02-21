"use client";
import { logout } from "@/app/lib/actions/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UserMenu() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div
      className="text-gray-100 hover:text-gray-200 hover:cursor-pointer rounded-full bg-gray-900 p-1 hover:shadow-lg border border-2 hover:border-gray-400 relative"
      onClick={() => setShowMenu(!showMenu)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path
          fillRule="evenodd"
          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
          clipRule="evenodd"
        />
      </svg>
      {showMenu && (
        <div className="h-auto w-32 shadow-lg bg-white text-gray-500 absolute mt-3 right-0 text-sm">
          <div
            className="px-3 py-2 hover:bg-gray-100 hover:cursor-pointer"
            onClick={() => router.push("/dashboard")}
          >
            Dashboard
          </div>
          <div
            className="px-3 py-2 hover:bg-gray-100 hover:cursor-pointer"
            onClick={logout}
          >
            Logout
          </div>
        </div>
      )}
    </div>
  );
}
