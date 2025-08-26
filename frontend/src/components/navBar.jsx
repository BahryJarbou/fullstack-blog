const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50">
      <ul className="flex justify-between items-center p-4 bg-purple-800 text-white">
        <li>
          <a href="/">✈️ Travel Tales</a>
        </li>
        <span className="flex space-x-4 ">
          <li>
            <a href="/about">About</a>
          </li>

          <li>
            <a href="/services"> 📸 Gallery</a>
          </li>
          <li>
            <a href="/blog"> 📔 Blog</a>
          </li>
        </span>
        <button className="bg-white rounded-xl p-2 text-red-600">
          Subscribe
        </button>
      </ul>
    </nav>
  );
};

export default NavBar;
