import { useBlogs } from "../hooks/useBlogs";
import { Blog } from "../types";
import ArticleCard from "./ArticleCard";

interface ArticleListProps {
  openModalForEditBlog: (blog: Blog) => void;
}

const ArticleList = ({ openModalForEditBlog }: ArticleListProps) => {
  const { blogs, deleteBlog } = useBlogs();

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {blogs.map((blog) => (
          <ArticleCard
            key={blog.id}
            blog={blog}
            openModalForEditBlog={() => openModalForEditBlog(blog)}
            deleteBlog={() => deleteBlog(blog.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
