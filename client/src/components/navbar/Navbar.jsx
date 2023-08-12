import React from "react";
import "./Navbar.css";
import ProfileIcon from "../../assets/eventsImage/Hasbulla.jpg";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <h3>AppName</h3>
      <div className="navbar-profile">
        <h4>John</h4>
        <img src={ProfileIcon} alt="Profile-Icon" />
      </div>
    </nav>
  );
};

export default Navbar;
