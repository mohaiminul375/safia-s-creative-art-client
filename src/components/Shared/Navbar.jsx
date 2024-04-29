import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../firebase/FirebaseProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log("user from navbar", user);

  useEffect(() => {}, []);
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  useEffect(() => {
    // console.log("i am use effect");
    // const getTheme = localStorage.getItem("theme");
    if (!theme) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", theme);
      const localTheme = localStorage.getItem("theme");

      // add custom data-theme attribute
      document.querySelector("html").setAttribute("data-theme", localTheme);
    }

    // console.log('theme from use effect',getTheme)
    // if (getTheme) {
    //   // setTheme(getTheme)

    //   console.log("true means i found",theme);
    //   localStorage.setItem('theme',theme)
    //   // const getTheme = localStorage.getItem("theme");
    //   document.querySelector('html').setAttribute('data-theme',getTheme)

    // } else {
    //   setTheme('light')
    //   localStorage.setItem("theme", "light");
    //   const getTheme = localStorage.getItem("theme");
    //   document.querySelector("html").setAttribute("data-theme", getTheme);
    // }

    // const setTheme = localStorage.setItem("theme", theme);
    // if (getTheme) {
    //   console.log("true");
    //   localStorage.setItem("theme", "light");
    //   const getTheme = localStorage.getItem("theme");
    //   document.querySelector("html").setAttribute("data-theme", getTheme);
    // } else {

    // }
    //  const localTheme=localStorage.getItem('theme')
    //  document.querySelector('html').setAttribute('data-theme',localTheme)
  }, [theme]);
  console.log(theme);
  const handleToggle = (e) => {
    if (e.target.checked) {
      console.log("toogle true");
      setTheme("dark");
    } else {
      console.log("toggle flase");
      setTheme("light");
    }
  };

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

      <NavLink
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-black font-bold text-xl"
            : "p-2 rounded-md text-xl"
        }
        to="/newsLetter"
      >
        News Letter
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-200 md:px-8 pt-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
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
        <div className="mr-3">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              onChange={handleToggle}
              type="checkbox"
              className="theme-controller"
              // defaultValue={true}
              checked={theme=='dark'}
            />

            

            {/* moon icon */}
            <svg
              className={`swap-on fill-current w-10 h-10`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
{/* sun icon by default on*/}
            <svg
              className={`${theme == 'light' ||"swap-off"} fill-current w-10 h-10`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
          </label>
        </div>
        {user ? (
          <>
            <div className="dropdown dropdown-end z-10">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar tooltip tooltip-left"
                data-tip={user?.displayName}
              >
                <div className="w-10 rounded-full ">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <div
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <p className="text-center text-xl font-bold">Profile of:</p>
                <p className="text-center">{user?.displayName}</p>
                <button onClick={logOut} className="btn mt-2">
                  Logout
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            {" "}
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
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
