import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; 

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
      </ul>
    </nav>
  );
};

export default Navbar;
