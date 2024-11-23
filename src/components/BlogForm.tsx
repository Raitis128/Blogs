import { useEffect, useState } from "react";
import { useBlogs } from "../hooks/useBlogs";
import { Blog } from "../types";

interface BlogFormProps {
  editingBlog: Blog | null;
  onClose: () => void;
}

const BlogForm = ({ editingBlog: editingBlog, onClose }: BlogFormProps) => {
  const { addBlog, updateBlog } = useBlogs();
  const [title, setTitle] = useState(editingBlog?.title || "");
  const [description, setDescription] = useState(
    editingBlog?.description || ""
  );
  const [image, setImage] = useState(editingBlog?.image || "");
  const [time, setTime] = useState(editingBlog?.time || "");

  useEffect(() => {
    if (editingBlog) {
      setTitle(editingBlog.title);
      setDescription(editingBlog.description);
      setImage(editingBlog.image);
      setTime(editingBlog.time);
    }
  }, [editingBlog]);

  const handleSubmit = () => {
    const blog: Blog = {
      id: editingBlog ? editingBlog.id : Date.now(),
      title,
      description,
      image,
      time,
    };

    if (editingBlog) {
      updateBlog(blog);
      onClose();
    } else {
      addBlog(blog);
      onClose();
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg w-[30rem] mx-auto">
      <h3 className="font-semibold text-xl mb-2 text-gray-800">
        {editingBlog ? "Edit Blog" : "Add New Blog"}
      </h3>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black resize-none h-32"
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="black w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
        />

        <input
          type="date"
          placeholder="Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
        />

        <section className="flex justify-end mt-6 space-x-4">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-black"
          >
            {editingBlog ? "Update Blog" : "Add Blog"}
          </button>

          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-6 py-2 rounded-lg font-semibold shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancel
          </button>
        </section>
      </div>
    </div>
  );
};

export default BlogForm;
