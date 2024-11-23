import { IoMdAddCircle } from "react-icons/io";
import Navigation from "./components/Navigation";
import PeopleToFollow from "./components/PeopleToFollow";
import TopicsList from "./components/TopicsList";
import TrendsList from "./components/TrendsList";
import { BlogProvider } from "./context/BlogProvider";
import { Blog } from "./types";
import { useState } from "react";
import Modal from "./components/Modal";
import BlogForm from "./components/BlogForm";
import ArticleList from "./components/ArticleList";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  const openModalForNewBlog = () => {
    setEditingBlog(null);
    setIsModalOpen(true);
  };

  const openModalForEditBlog = (blog: Blog) => {
    setEditingBlog(blog);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <BlogProvider>
        <Navigation />
        <div className="flex flex-col lg:flex-row lg:justify-center lg:items-start">
          {/* Main Content */}
          <section className="flex-1 p-4 sm:p-6">
            <button
              onClick={openModalForNewBlog}
              className="bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4 w-full sm:w-auto"
            >
              Add New Blog <IoMdAddCircle className="ml-2" />
            </button>

            <ArticleList openModalForEditBlog={openModalForEditBlog} />

            {isModalOpen && (
              <Modal onClose={() => setIsModalOpen(false)}>
                <BlogForm
                  editingBlog={editingBlog}
                  onClose={() => setIsModalOpen(false)}
                />
              </Modal>
            )}
          </section>

          {/* Sidebar */}
          <aside className="w-full lg:w-[30%] p-4 sm:mt-8 lg:mt-0">
            <PeopleToFollow />
            <TrendsList />
            <TopicsList />
          </aside>
        </div>
      </BlogProvider>
    </div>
  );
};


export default App;
