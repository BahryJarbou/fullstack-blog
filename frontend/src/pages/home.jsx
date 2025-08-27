import { useEffect, useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {posts.map((post) => (
        <div>
          <div className="card bg-base-100 w-96 shadow-sm" key={post.id}>
            <figure>
              <img src={post.cover} alt={post.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p>{post.content}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
