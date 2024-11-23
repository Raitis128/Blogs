import { useBlogs } from "../hooks/useBlogs";
import { Blog } from "../types";
import ArticleCard from "./ArticleCard";

interface ArticleListProps {
  openModalForEditBlog: (blog: Blog) => void;
}

const ArticleList = ({ openModalForEditBlog }: ArticleListProps) => {
  const { blogs, deleteBlog } = useBlogs();
  return (
    <div className="ml-[5rem]">
      {blogs.map((blog) => (
        <ArticleCard
          key={blog.id}
          blog={blog}
          openModalForEditBlog={() => openModalForEditBlog(blog)}
          deleteBlog={() => deleteBlog(blog.id)}
        />
      ))}
    </div>
  );
};

export default ArticleList;
