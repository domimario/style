import React from "react";
import "./SuggestedCard.css";
import Text from "../text/Text";

const SuggestedCard = ({ date, time, title, bgImage }) => {
  const cardBg = {
    backgroundImage: `url(${bgImage})`,
  };
  return (
    <>
      <div className="card">
        <div className="card-background" style={cardBg}></div>
        <div className="card-content">
          <div className="card-date">
            <Text
              text={`${date} - ${time}`}
              family={"opensans"}
              size={"s14"}
              weight={"regular"}
              lineheight={"l19"}
              color={"white"}
            />
          </div>
          <div className="card-title">
            <Text
              text={`${title}`}
              family={"opensans"}
              size={"s18"}
              weight={"bold"}
              lineheight={"l24"}
              color={"white"}
            />
          </div>
          <button className="card-button">
            <Text
              text={"Tickets"}
              family={"opensans"}
              size={"s16"}
              weight={"regular"}
              lineheight={"l22"}
              color={"white"}
            />
          </button>
        </div>
      </div>
    </>
  );
};
export default SuggestedCard;
