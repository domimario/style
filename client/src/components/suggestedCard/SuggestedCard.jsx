import React from "react";
import "./SuggestedCard.css";

const SuggestedCard = ({ date, time, tittle, bgImage }) => {
  const cardBg = {
    backgroundImage: `url(${bgImage})`,
  };
  return (
    <>
      <div className="card-content" style={cardBg}>
        <div>
          <div className="card-date">
            {date}-{time}
          </div>
          <div className="card-tittle">{tittle}</div>
          <button className="card-button">Ticket</button>
        </div>
      
      </div>
    </>
  );
};
export default SuggestedCard;
