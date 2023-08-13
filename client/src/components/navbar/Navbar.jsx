import React from "react";
import "./Navbar.css";
import ProfileIcon from "../../assets/eventsImage/Hasbulla.jpg";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <h3 className="app-name">AppName</h3>
      <div className="navbar-profile">
        <h4 className="profile-name"> John</h4>
        <img src={ProfileIcon} alt="Profile-Icon" className="profile-img" />
      </div>
    </nav>
  );
};

export default Navbar;
