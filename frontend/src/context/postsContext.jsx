import { createContext } from "react";
import { useState } from "react";

const PostsContext = createContext();

const PostsContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  return <PostsContext value={{ posts, setPosts }}>{children}</PostsContext>;
};

export { PostsContextProvider, PostsContext };
