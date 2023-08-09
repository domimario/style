import React from "react";
import "./UpComingCard.css";
const UpComingCard = ({
  date,
  month,
  time,
  price,
  tittle,
  location,
  eventImg,
}) => {
  const eventBg = {
    backgroundImage: `url(${eventImg})`,
  };
  return (
    <>
      <div className="upcoming-content" style={eventBg}>
        <div className="event-date">
          <p className="event-date-date"> {date}</p>
          <br />
          <p className="event-date-month">{month}</p>
        </div>
        <div className="event-price">
          <p>{price}</p>
        </div>

        <div className="event-content">
          <h4 className="event-tittle">{tittle}</h4>
          <p className="event-location-time">
            {location} - {time}
          </p>
        </div>
      </div>
    </>
  );
};
export default UpComingCard;
