import "./Navigation.css";
import React from "react";
import logo from "../images/logo.png";

function Navigation() {
  return (
    <nav>
      <figure className="logo">
        <img src={logo} alt="logo" />
      </figure>
      <p className="bold logo-text">Git-Them</p>

      <p>
        Powered By <span className="bold">GitHub</span>
      </p>
    </nav>
  );
}

export default Navigation;
