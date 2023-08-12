import React from "react";
import "./EventPage.css";
import Text from "../../components/textEvent/Text";
import eventBackground from "../../assets/eventsImage/img2.jpg";
import calendarIcon from "../../assets/icons/calendar.svg";
import locationIcon from "../../assets/icons/location.svg";
import ticketIcon from "../../assets/icons/ticket.svg";
import { useNavigate } from "react-router-dom";

const EventPage = (props) => {
  const eventBg = {
    backgroundImage: `url(${eventBackground})`,
  };
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/ ");
  };
  return (
    <>
      <div className="event-page-container">
        <div className="page-background" style={eventBg}>
          <div className="page-head">
            <button className="page-back " onClick={handleNavigate}>
              <i className="fa-solid fa-chevron-right fa-rotate-180 back-icon"></i>
            </button>
            <h4 className="page-title">DAVE</h4>
          </div>

          <div className="event-page-details">
            <div className="event-price">
              <h4 className="page-name">Dave</h4>
              <p className="page-price">$45.00</p>
            </div>
            <div className="page-calendar mb-24">
              <div className="bg">
                <img src={calendarIcon} alt="" />
              </div>
              <div className="date-time">
                <div>
                  <p className="date m-0">02</p>
                  <p className="month m-0">Septembre</p>
                </div>
                <hr className="spacer" />
                <div>
                  <p className="time m-0">10:00 PM</p>
                  <p className="day m-0">Tuesday</p>
                </div>
              </div>
            </div>
            <div className="page-location mb-24">
              <div className="bg">
                <img src={locationIcon} alt="" className="" />
              </div>
              <p>Amsterdam, Netherlands</p>
            </div>
            <div className="page-ticket mb-24">
              <div className="bg">
                <img src={ticketIcon} alt="" />
              </div>
              <p>5 Tickets</p>
            </div>
          </div>
        </div>

        <div className="page-about">
          <h3>About</h3>
          <Text
            description={
              "Lorem ipsum dolor sit amet. Ea nobis corporis ad fugiat culpa ut quibusdam soluta aut aliquid saepe. Est explicabo neque aut molestiae doloribus At fugiat ipsum non cupiditate soluta sed dolorem asperiores aut quia perferendis sed possimus officiis."
            }
          />
          <button className="order-ticket">
            <img src={ticketIcon} alt="" />
            Tickets
          </button>
        </div>
      </div>
    </>
  );
};

export default EventPage;
