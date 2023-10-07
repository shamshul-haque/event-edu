import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-red-500 underline active" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/destination"
          className={({ isActive }) =>
            isActive ? "text-red-500 underline active" : ""
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-red-500 underline active" : ""
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-10 bg-white bg-opacity-40">
      <div className="flex items-center justify-between mx-4 md:mx-8 lg:mx-16 py-5">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-12" />
          <p className="text-3xl font-bold">
            <span className="text-red-500">E</span>vent
            <span className="text-fuchsia-500">E</span>du
          </p>
        </div>
        <div className="hidden lg:flex items-center gap-5">
          <ul className="flex gap-5 px-1 uppercase">{links}</ul>
          <Link to="/login">
            <button className="px-4 py-2 bg-red-500 hover:bg-transparent hover:border hover: border-red-500 hover:text-black transition-all duration-300 rounded w-full uppercase text-white font-medium">
              Get Ticket
            </button>
          </Link>
          <Link to="/login">
            <button className="px-4 py-2 bg-red-500 hover:bg-transparent hover:border hover: border-red-500 hover:text-black transition-all duration-300 rounded w-full uppercase text-white font-medium">
              Login
            </button>
          </Link>
        </div>
        <div className="lg:hidden flex">
          <div
            onClick={() => setToggleMenu(!toggleMenu)}
            className="cursor-pointer"
          >
            {toggleMenu === true ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
          <ul
            className={`absolute right-8 bg-white bg-opacity-40 rounded-lg p-5 ${
              toggleMenu ? `top-12` : `-top-60`
            } duration-1000 z-10 uppercase space-y-1`}
          >
            {links}
            <Link to="/login">
              <button className="px-4 py-2 bg-red-500 hover:bg-transparent hover:border hover: border-red-500 hover:text-black transition-all duration-300 rounded w-full uppercase text-white font-medium">
                Get Ticket
              </button>
            </Link>
            <Link to="/login">
              <button className="px-4 py-2 bg-red-500 hover:bg-transparent hover:border hover: border-red-500 hover:text-black transition-all duration-300 rounded w-full uppercase text-white font-medium my-3">
                Login
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
