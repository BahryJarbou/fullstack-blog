import { Link } from "react-router";
const PostCard = ({ post }) => {
  return (
    <div
      initial={{ opacity: 0 }}
      animate={{ oacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="card bg-base-100 w-108 shadow-sm max-h-[60vh]"
      data-theme="nord"
    >
      <img
        src={post.cover}
        alt={post.title}
        className="min-h-[50%] max-h-[50%] objcet-fill rounded-t-md"
      />

      <div className="card-body">
        <h2 className="card-title overflow-hidden text-ellipsis">
          {post.title}
        </h2>
        <p className=" overflow-hidden text-ellipsis">
          {post.content.slice(0, 200)} ...
        </p>
        <div className="card-actions justify-end">
          <Link to={`/postDetails/${post.id}`}>
            <button className="btn btn-primary">Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
