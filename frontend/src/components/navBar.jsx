import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav className="z-50 navbar bg-purple-800  text-amber-50 shadow-sm flex justify-between">
      <div className="navbar-start">
        <Link to="/">
          <label className="btn btn-ghost text-xl">✈️ Travel Tales</label>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/createPost">
              <label className="btn btn-neutral">create Post</label>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <label className="btn btn-neutral min-w-[5vw]">About</label>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
