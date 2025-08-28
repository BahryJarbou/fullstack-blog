import { useEffect, useState, use } from "react";
import PostCard from "../components/postCard.jsx";
import { PostsContext } from "../context/postsContext.jsx";

const Home = () => {
  const { posts, setPosts } = use(PostsContext);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:3000/posts");

        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        setPosts(() => data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [posts]);
  return (
    <div className="grid grid-cols-3 gap-4 p-4 min-h-screen">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
