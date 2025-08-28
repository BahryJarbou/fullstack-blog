import { createContext } from "react";
import { useState } from "react";

const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  const [post, setPost] = useState([]);

  return <PostContext value={{ post, setPost }}>{children}</PostContext>;
};

export { PostContextProvider, PostContext };
