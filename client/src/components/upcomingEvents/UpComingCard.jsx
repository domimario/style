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
      <div
        className="upcoming-content"
        style={eventBg}
        onClick={handleNavigate}
      >
        <div className="event-date">
          <p className=" m-0"> {date}</p>
          <p className="m-0">{month}</p>
        </div>
        <div className="price">
          <p>{price}</p>
        </div>

        <div className="event-content">
          <h4 className="tittle">{tittle}</h4>
          <p className="location-time">
            {location} - {time}
          </p>
        </div>
      </div>
    </>
  );
};
export default UpComingCard;
