const PostDetails = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="min-w-sm rounded-lg shadow-2xl"
        />
        <div className="flex flex-col justify-end">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <span className="flex gap-2 w-">
            <button className="btn btn-primary w-[70px]">Edit</button>
            <button className="btn btn-primary w-[70px]">Delete</button>
          </span>
          <div className=" flex gap-2 items-center mt-4 ">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt=""
              className="h-[30px] w-[30px] rounded-full object-cover "
            />
            <div>
              <span className="">Peter John</span>
              <p className="text-sm"> Posted 2 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
