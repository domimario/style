import React from "react";
import "./SuggestedCard.css";

const SuggestedCard = ({ date, time, title, bgImage }) => {
  const cardBg = {
    backgroundImage: `url(${bgImage})`,
  };
  return (
    <>
      <div className="card">
        <div className="card-background" style={cardBg}></div>
        <div className="card-content">
          <p className="card-date">
            {date} - {time}
          </p>
          <p className="card-title">{title}</p>
          <button className="card-button">Tickets</button>
        </div>
      </div>
    </>
  );
};
export default SuggestedCard;
