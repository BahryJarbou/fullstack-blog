const Home = () => {
  const posts = [
    {
      id: 1,
      title: "First Post",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      img: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },

    {
      id: 2,
      title: "Second Post",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      img: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },

    {
      id: 3,
      title: "Third Post",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      img: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  return (
    <div>
      <div className="home  p-4  flex flex-col  md:flex-row  gap-y-4 ">
        <div className="posts  flex-3  ">
          {posts.map((post) => (
            <div
              className=" flex flex-row odd:flex-row-reverse mb-4  bg-white gap-4"
              key={post.id}
            >
              <div>
                <img
                  src={post.img}
                  alt=""
                  className="w-full h-100 object-cover shadow-lg rounded-lg"
                />
              </div>
              <div className="info">
                {/* <Link to={`/post/${post.id}`}>
                  <h1 className="text-2xl font-bold my-2">{post.title}</h1>
                </Link> */}
                <h1 className="text-2xl font-bold my-2">{post.title}</h1>
                <p>{post.desc}</p>
                <button className="bg-purple-800 text-white p-2 rounded-lg mt-2 border">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
