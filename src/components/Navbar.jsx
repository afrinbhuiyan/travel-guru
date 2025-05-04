import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const linkStyle =
    "flex items-center px-3 py-2 text-gray-700 hover:text-[#F9A51A] transition-colors duration-200";
  const activeLinkStyle =
    "text-[#F9A51A] font-medium border-b-2 border-[#F9A51A]";

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container flex justify-between items-center h-20 mx-auto px-4">
        <NavLink to="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Website Logo"
            className="h-12 w-auto"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/150x40?text=Logo";
              e.target.className = "h-10 w-auto";
            }}
          />
        </NavLink>

        <nav className="hidden md:flex items-center space-x-1 lg:space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeLinkStyle : ""}`
            }
            end
          >
            Home
          </NavLink>

          <NavLink
            to="/news"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeLinkStyle : ""}`
            }
          >
            News
          </NavLink>

          <NavLink
            to="/destination"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeLinkStyle : ""}`
            }
          >
            Destination
          </NavLink>

          <NavLink
            to={"/blog"}
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeLinkStyle : ""}`
            }
          >
            Blog
          </NavLink>

          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeLinkStyle : ""}`
            }
          >
            Contact
          </NavLink>
          <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
        </nav>

        <button className="md:hidden p-2 text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
