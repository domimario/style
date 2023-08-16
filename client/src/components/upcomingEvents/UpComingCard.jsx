import React from "react";
import "./UpComingCard.css";
import { useNavigate } from "react-router-dom";
import Text from "../text/Text";
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
          <div className="date">
            <Text
              text={`${date}`}
              family={"open-sans"}
              lineheight={"l13"}
              size={"s14"}
              weight={"bold"}
              color={"white"}
            />
          </div>
          <div className="month">
            <Text
              text={`${month}`}
              family={"open-sans"}
              lineheight={"l13"}
              size={"s14"}
              weight={"regular"}
              color={"white"}
            />
          </div>
        </div>

        <div className="event-price">
          <div className="price">
            <Text
              text={`${price}`}
              family={"open-sans"}
              lineheight={"l13"}
              size={"s14"}
              weight={"bold"}
              color={"black"}
            />
          </div>
        </div>

        <div className="event-content">
          <div className="title">
            <Text
              text={`${tittle}`}
              family={"open-sans"}
              lineheight={"l24"}
              size={"s18"}
              weight={"regular"}
              color={"white"}
            />
          </div>
          <div className="location-time">
            <Text
              text={`${location}`}
              family={"open-sans"}
              lineheight={"l22"}
              size={"s16"}
              weight={"regular"}
              color={"white"}
            />{" "}
            - {""}
            <Text
              text={`${time}`}
              family={"open-sans"}
              lineheight={"l22"}
              size={"s16"}
              weight={"regular"}
              color={"white"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default UpComingCard;
