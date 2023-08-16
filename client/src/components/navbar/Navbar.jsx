import React, { useEffect, useState } from "react";
import "./Navbar.css";
import ProfileIcon from "../../assets/eventsImage/Hasbulla.jpg";
import Text from "../text/Text";
const Navbar = (props) => {
  const [isSmall, setIsSmall] = useState(window.innerWidth <= 700);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth <= 700);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
        <div className="profile-name">
          <Text
            text={"John"}
            family={"open-sans"}
            weight={"regular"}
            size={isSmall ? "s16" : "s18"}
            lineheight={isSmall ? "l22" : "l24"}
            color={"white"}
          />
        </div>
        <img src={ProfileIcon} alt="Profile-Icon" className="profile-img" />
      </div>
    </nav>
  );
};

export default Navbar;
