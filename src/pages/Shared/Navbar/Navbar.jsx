import React from "react";
import Logo from "../../../components/Logo/Logo";
import { Link, NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("logout successful");
        alert("logout successful");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="">Secvices</NavLink>
      </li>

      <li>
        <NavLink to="/send-parcel">Send Parcel</NavLink>
      </li>
      <li>
        <NavLink to="/rider">Be a Rider</NavLink>
      </li>
      <li>
        <NavLink to="/coverage">Coverage Areas</NavLink>
      </li>
    
      {
        user && 
      <>
        <li>
        <NavLink to="/dashboard/my-parcels">my parcel</NavLink>
      </li>
      
        <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      </>
      }

      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>

    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            {links}
          </ul>
        </div>
        <button className=" text-xl">
          <Logo />
        </button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-5 items-center">
            <img
              className="w-10 h-10 rounded-full border"
              src={user.photoURL}
              alt={user.displayName}
            />
            <a onClick={handleLogout} className="btn">
              LogOut
            </a>
          </div>
        ) : (
          <Link to={"/login"} className="btn">
            Login
          </Link>
        )}
        <Link className="btn btn-primary text-black mx-3" to={"/rider"}>
          Be a Rider
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
