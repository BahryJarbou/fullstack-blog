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
    <div className="grid grid-cols-3 gap-4 p-4">
      {posts.map((post) => (
        <div>
          <div className="card bg-base-100 w-96 shadow-sm" key={post.id}>
            <figure>
              <img src={post.img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p>{post.desc}</p>
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
