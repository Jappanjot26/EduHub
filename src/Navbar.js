import Image from "./no-text-logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleToggleNav = () => {
    setShowNav(!showNav);
  };
  const handleClickHome = () => {
    window.scrollTo(0, 0);
  };
  const handleClickCourses = () => {
    window.scrollTo(0, 1000);
  };
  const handleClickContact = () => {
    window.scrollTo(0, 2000);
  };
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={Image} alt="Logo" className="nav-img" />
        <p className="nav-logo-text">EDUHUB</p>
      </div>

      <button className="nav-toggle-btn" onClick={handleToggleNav}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div className="nav-links-div">
        <Link
          onClick={handleClickHome}
          className={`nav-links ${showNav ? "show" : ""}`}
        >
          Home
        </Link>
        <Link
          onClick={handleClickCourses}
          className={`nav-links ${showNav ? "show" : ""}`}
        >
          Courses
        </Link>
        <Link
          onClick={handleClickContact}
          className={`nav-links ${showNav ? "show" : ""}`}
        >
          Contact
        </Link>
        <Link
          to="/login"
          className={`nav-links nav-login ${showNav ? "show" : ""}`}
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
