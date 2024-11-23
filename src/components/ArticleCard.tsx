import { FaBookmark, FaEdit, FaTrash } from "react-icons/fa";
import { Blog } from "../types";

interface ArticleCardProps {
  blog: Blog;
  openModalForEditBlog: () => void;
  deleteBlog: () => void;
}

const ArticleCard = ({
  blog,
  openModalForEditBlog,
  deleteBlog,
}: ArticleCardProps) => {
  return (
    <div className="flex p-4 bg-white w-[40rem] mb-6 ml-[2rem] shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-36 h-24 object-cover rounded-lg shadow-md"
      />

      <div className="ml-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {blog.title}
        </h3>

        <p className="text-sm text-gray-700 flex-1">{blog.description}</p>
        <div className="flex items center justify-between mt-4 text-gray-600">
          <span className="text-sm">{blog.time}</span>
          <div className="flex space-x-3">
            <FaBookmark className="text-gray-500 hover:text-gray-700 transition-colors duration-200 cursor-pointer" />
            <FaEdit
              onClick={openModalForEditBlog}
              className="text-blue-500 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            />
            <FaTrash
              onClick={deleteBlog}
              className="text-red-500 hover:text-red-600 transition-colors duration-200 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
