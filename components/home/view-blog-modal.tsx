type Blog = {
  title: string;
  content: string;
  author: string;
  isOpen: boolean;
  created_at: string;
  setIsOpen: (view: boolean) => void;
};
export default function ViewBlogModal({
  title,
  content,
  author,
  created_at,
  isOpen,
  setIsOpen,
}: Blog) {
  return (
    <div
      className={`${
        isOpen ? "" : "hidden"
      } fixed top-0 left-0 w-full h-full flex justify-center items-center z-10 bg-gray-900 bg-opacity-50 p-5 py-10`}
    >
      <div className="flex flex-col items-end bg-white shadow-lg h-full flex-1 max-w-7xl relative">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="py-1 px-4 bg-gray-900 text-gray-100 top-0 right-0"
        >
          x
        </button>
        <div className="px-5 pb-5 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">{title}</h1>
          <div className="text-gray-700 mb-4">
            <p className="mb-3 ">Author: {author}</p>
            <p className="text-sm">Created: {created_at.split("T")[0]}</p>
          </div>
          <div className="text-gray-600 indent-10">{content}</div>
        </div>
      </div>
    </div>
  );
}
