import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header className="header">
        <nav className="flex justify-between items-center h-[80px] container mx-auto">
          <div>
            <NavLink to="/home">Home</NavLink>
          </div>
          <div className="flex gap-4">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Contact
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "underline " : " btn btn-accent mybtn "
              }
            >
              Login
            </NavLink>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
