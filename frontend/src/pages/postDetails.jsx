import { useEffect, useState } from "react";
import moment from "moment";

const PostDetails = () => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/posts");

        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
    });

    setPost(post.filter((post) => post.id !== id));
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={post.cover}
          alt={post.title}
          className="min-w-sm rounded-lg shadow-2xl"
        />
        <div className="flex flex-col justify-end">
          <h1 className="text-5xl font-bold">{post.title}</h1>
          <p className="py-6">{post.content}</p>
          <span className="flex gap-2">
            <button className="btn btn-primary w-[70px]">Update</button>
            <button
              onClick={() => handleDelete(post.id)}
              className="btn btn-primary w-[70px]"
            >
              Delete
            </button>
          </span>
          <div className=" flex gap-2 items-center mt-4 ">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt={post.author}
              className="h-[30px] w-[30px] rounded-full object-cover "
            />
            <div>
              <span className="font-bold">{post.author}</span>
              <p className="text-xs font-light ">
                Posted {moment(post.date).fromNow()}
              </p>{" "}
              {/* i imported the moment library to format the date */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
