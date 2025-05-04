import React, { use } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut().then(() => {
      alert("logOut")
    }).catch((error) => {
      console.log(error)
    });
  }
  return (
    <header className="flex justify-between items-center p-6 px-16">
      <div>
        <img src={logo} alt="" />
      </div>
      <label className="w-1/3 flex items-center gap-2 px-4 py-2 bg-white/25 backdrop-blur-sm rounded-lg border border-white/30 focus-within:border-white/50 transition-colors">
        <IoSearchSharp className="text-white text-lg" />
        <input
          placeholder="Search your Destination..."
          className="w-full bg-transparent text-white placeholder-white/70 focus:outline-none"
        />
      </label>
      <nav className="flex gap-6 text-white">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/news"}>News</NavLink>
        <NavLink to={"/destination"}>Destination</NavLink>
        <NavLink to={"/blog"}>Blog</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </nav>
      {user ? (
        <button onClick={handleLogOut} className="bg-[#F9A51A] hover:bg-[#f9911a] text-black font-semibold py-2 px-8 rounded">
          Logout
        </button>
      ) : (
        <Link
          to={"/login"}
          className="bg-[#F9A51A] hover:bg-[#f9911a] text-black font-semibold py-2 px-8 rounded"
        >
          Login
        </Link>
      )}
    </header>
  );
};

export default Header;
