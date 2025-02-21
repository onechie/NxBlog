import DeleteBlogButton from "./delete-blog-button";
import EditBlogModal from "./edit-blog-modal";
type BlogCard = {
  id: string;
  title: string;
  content: string;
};
export default function BlogCard(props: BlogCard) {
  const { id, title, content } = props;

  return (
    <div className="border h-80 flex flex-col justify-between bg-white transition duration-200 hover:shadow-lg ">
      <div className="truncate mx-5 py-2 border-b text-gray-800">{title}</div>
      <p className="truncate text-wrap mx-5 flex-1 my-2 text-gray-600 text-sm">
        {content}
      </p>
      <div className="mx-5 py-3 border-t text-xs text-gray-800 flex gap-2">
        <EditBlogModal id={id} title={title} content={content}></EditBlogModal>
        <DeleteBlogButton id={id}></DeleteBlogButton>
      </div>
    </div>
  );
}
