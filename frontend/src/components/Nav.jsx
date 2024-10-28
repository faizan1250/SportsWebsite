import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex justify-between mt-0 p-8 w-[100vw] text-3xl font-semibold shadow-md bg-white text-black">
      <div>ATHLETEHUB</div>

      <div className="flex text-3xl font-medium">
        <Link
          to="/"
          className={`ml-20 cursor-pointer hover:text-blue-500 ${isActive("/") ? "opacity-100 text-blue-500 text-3xl" : "opacity-50"}`}
        >
          Home
        </Link>
        <Link
          to="/News"
          className={`ml-20 cursor-pointer hover:text-blue-500 ${isActive("/News") ? "opacity-100 text-blue-500 text-3xl" : "opacity-50"}`}
        >
          News
        </Link>
        <Link
          to="/Score"
          className={`ml-20 cursor-pointer hover:text-blue-500 ${isActive("/Score") ? "opacity-100 text-blue-500 text-3xl" : "opacity-50"}`}
        >
          Stats
        </Link>
        <Link
          to="/Stats"
          className={`ml-20 cursor-pointer hover:text-blue-500 ${isActive("/Stats") ? "opacity-100 text-blue-500 text-3xl" : "opacity-50"}`}
        >
          Scores
        </Link>
        <Link
          to="/user"
          className={`ml-20 mr-10 cursor-pointer hover:text-blue-500 ${isActive("/user") ? "opacity-100 text-black" : "opacity-50"}`}
        >
          User
        </Link>
      </div>
    </div>
  );
};

export default Nav;
