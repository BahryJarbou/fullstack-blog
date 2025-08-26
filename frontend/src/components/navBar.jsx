const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">✈️ Travel Tales</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
