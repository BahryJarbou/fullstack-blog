import { Link } from "react-router";
const About = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">A Travel Blog designed with love</p>
          <p className="py-6">Designed By Chinwe and Bahry</p>
          <Link to="/createPost">
            <button className="btn btn-primary">Create Your First Post</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
