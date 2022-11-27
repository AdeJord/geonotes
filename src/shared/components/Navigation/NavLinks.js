import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <div>
      {" "}
      <ul className="nav-links">
        <li>
          <NavLink style={{ textDecoration: "none" }} to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink style={{ textDecoration: "none" }} to="/auth">
            Login / Sign-Up
          </NavLink>
        </li>
        <li>
          <NavLink style={{ textDecoration: "none" }} to="/allnotes">
            See everyones notes
          </NavLink>
        </li>
        <li>
          <NavLink style={{ textDecoration: "none" }} to="/mynotes">
            See your notes
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
