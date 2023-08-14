import React from "react";
import "./UpComingCard.css";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/event");
  };

  return (
    <>
      <div className="event">
        <div
          className="event-background"
          style={eventBg}
          onClick={handleNavigate}
        ></div>
        <div className="event-date">
          <p className="date"> {date}</p>
          <p className="month">{month}</p>
        </div>

        <div className="event-price">
          <p className="price">{price}</p>
        </div>

        <div className="event-content">
          <h4 className="title">{tittle}</h4>
          <p className="location-time">
            {location} - {time}
          </p>
        </div>
      </div>
    </>
  );
};
export default UpComingCard;
