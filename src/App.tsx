import { IoMdAddCircle } from "react-icons/io";
import Navigation from "./components/Navigation";
import PeopleToFollow from "./components/PeopleToFollow";
import TopicsList from "./components/TopicsList";
import TrendsList from "./components/TrendsList";
import { BlogProvider } from "./context/BlogProvider";
import { Blog } from "./types";
import { useState } from "react";
import Modal from "./components/Modal";

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
    <div>
      <BlogProvider>
        <Navigation />
        <div className="flex justify-center">
          <section className="mx-auto p-6">
            <button
              onClick={openModalForNewBlog}
              className="ml-[7rem] bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4"
            >
              Add New Blog <IoMdAddCircle className="ml-[.5rem]" />
            </button>

            {isModalOpen && (
              <Modal onClose={() => setIsModalOpen(false)}>
                <BlogForm />
              </Modal>
            )}
          </section>
          <div className="w-[30%]">
            <PeopleToFollow />
            <TrendsList />
            <TopicsList />
          </div>
        </div>
      </BlogProvider>
    </div>
  );
};

export default App;
