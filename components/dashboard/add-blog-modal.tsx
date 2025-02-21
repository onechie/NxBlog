"use client";
import { useState } from "react";
import Input from "../ui/input";
import SubmitButton from "../ui/submit-button";
import { publishBlog } from "@/app/lib/actions/blog";

export default function AddBlogModal() {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div className="">
      <button
        type="button"
        onClick={() => setShowModal(!showModal)}
        className="p-2 bg-gray-900 text-gray-100 w-full mb-5 text-sm"
      >
        Create a Blog
      </button>
      <div
        className={`${
          showModal ? "" : "hidden"
        } fixed top-0 left-0 w-full h-full flex justify-center items-center z-10 bg-gray-900 bg-opacity-50 p-5`}
      >
        <form className="flex flex-col bg-white shadow-lg flex-1 max-w-7xl">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setShowModal(!showModal)}
              className="py-2 px-4 bg-gray-900 text-gray-100"
            >
              x
            </button>
          </div>

          <div className="flex flex-col px-5 pb-5 gap-5">
            <Input label="Title" name="title" type="text"></Input>
            <Input label="Content" name="content" type="textarea"></Input>
            <SubmitButton text="Publish" action={publishBlog}></SubmitButton>
          </div>
        </form>
      </div>
    </div>
  );
}
