import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
const Navbar = () => {
  const links = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-black font-bold text-xl"
            : "p-2 rounded-md text-xl"
        }
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-black font-bold text-xl"
            : "p-2 rounded-md text-xl"
        }
        to="/allArt&Craft"
      >
        All Art & Craft
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-black font-bold  text-xl"
            : "p-2 rounded-md text-xl"
        }
        to="/addArt&Craft"
      >
        Add Art & Craft
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-black font-bold text-xl"
            : "p-2 rounded-md text-xl"
        }
        to="/myArt&Craft"
      >
        My Art & Craft
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-200 md:px-8 pt-5">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-2">
            <img className="w-16" src={logo} alt="" />
            <div>
              <h2 className="font-rancho text-3xl font-bold">Safia's </h2>
              <small className="italic">creative art studio</small>
            </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex pb-0">
        <ul className="menu menu-horizontal items-center px-1 pb-0 gap-4">
          {links}
        </ul>
      </div>
      <div className="navbar-end text-5xl">
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-black font-bold text-base mr-2"
              : "p-2 rounded-md text-lg mr-2"
          }
        >
          Register
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-2 underline border-black font-bold btn bg-white rounded-full text-base"
              : "btn bg-white rounded-full text-base"
          }
          to="/login"
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
