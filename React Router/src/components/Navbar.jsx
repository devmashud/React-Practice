import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; 
import { CiDark } from "react-icons/ci";


const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">The FactForge</h2>

      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Contact
          </NavLink>

        </li>

        <li style={{fontSize:"23px"}} onClick={(e)=>{console.log("clicked done")}}>
          <CiDark />

        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
