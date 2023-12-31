import { useContext, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Log Out successfully!", {
        position: "top-center",
        theme: "colored",
      });
    });
  };

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
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-red-500 underline active" : ""
          }
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive ? "text-red-500 underline active" : ""
          }
        >
          Gallery
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-10 bg-white bg-opacity-60">
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
          <div>
            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} alt="profile" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="z-20 menu dropdown-content bg-fuchsia-500 bg-opacity-80 p-3 rounded-box text-center w-40"
                >
                  <li className="font-bold pb-3 uppercase">
                    {user.displayName}
                  </li>
                  <Link
                    to="/login"
                    onClick={handleLogOut}
                    className="px-4 py-2 bg-red-500 hover:bg-transparent hover:border hover: border-red-500 hover:text-black transition-all duration-300 rounded uppercase text-white font-medium text-center"
                  >
                    Log Out
                  </Link>
                </ul>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-red-500 hover:bg-transparent hover:border hover: border-red-500 hover:text-black transition-all duration-300 rounded w-full uppercase text-white font-medium mt-3"
              >
                Login
              </Link>
            )}
          </div>
        </div>
        <div className="lg:hidden flex">
          <div
            onClick={() => setToggleMenu(!toggleMenu)}
            className="cursor-pointer"
          >
            {toggleMenu === true ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
          <ul
            className={`absolute right-8 bg-fuchsia-500 bg-opacity-80 rounded-lg p-5 ${
              toggleMenu ? `top-12` : `-top-60`
            } duration-1000 z-10 uppercase space-y-1`}
          >
            <div>
              {user && (
                <div>
                  <li className="flex justify-center">
                    <img
                      src={user.photoURL}
                      alt="profile"
                      className="w-10 h-10 rounded-full"
                    />
                  </li>
                  <li className="font-bold">{user.displayName}</li>
                </div>
              )}
            </div>
            <div className="pb-3">{links}</div>
            <div>
              {user ? (
                <div className="text-center">
                  <Link
                    to="/login"
                    onClick={handleLogOut}
                    className="px-4 py-2 bg-red-500 hover:bg-transparent hover:border hover: border-red-500 hover:text-black transition-all duration-300 rounded w-full uppercase text-white font-medium"
                  >
                    Log Out
                  </Link>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="px-4 py-2 bg-red-500 hover:bg-transparent hover:border hover: border-red-500 hover:text-black transition-all duration-300 rounded w-full uppercase text-white font-medium"
                >
                  Login
                </Link>
              )}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
