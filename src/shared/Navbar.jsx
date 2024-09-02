import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location=useLocation();
  console.log(location.pathname);
  const isBannerSection = location.pathname === "/";
  const navLinks = (
    <>
      <li className="text-lg font-semibold hover:text-white">
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color:  isActive ? "white" : "#6B7280",
              backgroundColor: isActive ? "#B18B5E" : "",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      <li className="text-lg font-semibold hover:text-white">
        <NavLink
          to="/gallery"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color:  isActive ? "white" : "#6B7280",
              hoverColor: "white",
              backgroundColor: isActive ? "#B18B5E" : "",
            };
          }}
          className=""
        >
          Gallery
        </NavLink>
      </li>
      <li className="text-lg font-semibold hover:text-white">
        <NavLink
          to="/about"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color:   isActive ? "white" : "#6B7280",
              backgroundColor: isActive ? "#B18B5E" : "",
            };
          }}
        >
          About Artist
        </NavLink>
      </li>
      <li className="text-lg font-semibold hover:text-white">
        <NavLink
          to="/blogs"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color:  isActive ? "white" : "#6B7280",
              backgroundColor: isActive ? "#B18B5E" : "",
            };
          }}
        >
          Blogs
        </NavLink>
      </li>
      <li className="text-lg font-semibold hover:text-white">
        <NavLink
          to="/contact"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color:  isActive ? "white" : "#6B7280",
              backgroundColor: isActive ? "#B18B5E" : "",
            };
          }}
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
  
  return (
    <div  className={`navbar p-0 px-3 md:px-10 ${
      isBannerSection ? "bg-transparent absolute" : "bg-base-50"
    }`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a href="/" className="w-[100px] h-[100px] py-0">
          <img src="./logo-final.png" alt="" className="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end pr-1">
        <button className="btn bg-[#B18B5E] text-white text-lg btn-ghost">
          <Link to="/login">Log In</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
