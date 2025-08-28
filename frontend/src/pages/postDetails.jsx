import { useEffect, useState, use } from "react";
import moment from "moment";
import { useParams, useNavigate } from "react-router";
import { PostsContext } from "../context/postsContext.jsx";
import UpdateModal from "../components/updateModal.jsx";
import { PostContext } from "../context/postContext.jsx";

const PostDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { posts, setPosts } = use(PostsContext);
  const { post, setPost } = use(PostContext);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`http://localhost:3000/posts/${id}`);

        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        setPost({
          ...post,
          author: data.author,
          title: data.title,
          content: data.content,
          cover: data.cover,
        });
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:3000/posts/${id}`, {
        method: "DELETE",
      });

      setPosts(posts.filter((post) => post.id !== id));
      alert("Post deleted success fully");
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };
  // console.log(post);
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
            {/* The button to open modal */}
            <label htmlFor="my_modal_7" className="btn btn-primary w-[4.5rem]">
              Edit
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal " role="dialog">
              <div className="modal-box min-w-[70vw]">
                <UpdateModal id={id} />
              </div>
              <label className="modal-backdrop" htmlFor="my_modal_7">
                Close
              </label>
            </div>
            {/* <button className="btn btn-primary w-[4.5rem]">Update</button> */}
            <button
              onClick={() => handleDelete(post.id)}
              className="btn btn-primary w-[4.5rem]"
            >
              Delete
            </button>
          </span>
          <div className=" flex gap-2 items-center mt-4 ">
            <img
              src="https://media.istockphoto.com/id/2041572395/vector/blank-avatar-photo-placeholder-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=wSuiu-si33m-eiwGhXiX_5DvKQDHNS--CBLcyuy68n0="
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
