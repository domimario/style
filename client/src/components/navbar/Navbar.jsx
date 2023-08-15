import React from "react";
import "./Navbar.css";
import ProfileIcon from "../../assets/eventsImage/Hasbulla.jpg";
import Text from "../text/Text";
const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="app-name">
        <Text
          text={"AppName"}
          family={"open-sans"}
          weight={"bold"}
          size={"s20"}
          lineheight={"l27"}
          color={"white"}
        />
      </div>

      <div className="navbar-profile">
        <h4 className="profile-name">
          <Text
            text={"John"}
            family={"open-sans"}
            weight={"regular"}
            size={"s16"}
            lineheight={"l22"}
            color={"white"}
          />
        </h4>

        <img src={ProfileIcon} alt="Profile-Icon" className="profile-img" />
      </div>
    </nav>
  );
};

export default Navbar;
