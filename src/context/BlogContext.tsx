import { createContext } from "react";
import { BlogContextType } from "./BlogProvider";

export const BlogContext = createContext<BlogContextType | undefined>(
  undefined
);
