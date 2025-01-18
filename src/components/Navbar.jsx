import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
        {/* Logo */}
        <Link
              to="/">
        <h1 className="text-3xl justify-items-start font-bold text-purple-900">QUEUE VIEW.</h1>
        </Link>
        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/livefeed" className="hover:underline hover:text-purple-900 transition">
              Live View
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline hover:text-purple-900 transition">
              About
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            aria-label="Toggle Menu"
            onClick={toggleMenu}
            className="text-purple-400 focus:outline-none hover:text-purple-300 transition"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="flex flex-col space-y-4 bg-gray-700 p-6 text-center md:hidden">
          <li>
            <Link
              to="/livefeed"
              onClick={toggleMenu} // Close menu on link click
              className="hover:underline hover:text-purple-300 transition"
            >
              Live View
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={toggleMenu} // Close menu on link click
              className="hover:underline hover:text-purple-300 transition"
            >
              About
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
