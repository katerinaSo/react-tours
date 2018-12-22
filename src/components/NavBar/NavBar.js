import React from "react";
import "./NavBar.scss";
import logo from "./logo.png";

export default function NavBar() {
  return (
    <div className="navbar">
      <img src={logo} alt="travel logo" id="logo" />
      <ul className="nav-links">
        <li>
          <a href="#Home" className="nav-link">
            home
          </a>
        </li>
        <li>
          <a href="#About" className="nav-link">
            about
          </a>
        </li>
        <li>
          <a href="#Tours" className="nav-link active">
            tours
          </a>
        </li>
      </ul>
    </div>
  );
}
