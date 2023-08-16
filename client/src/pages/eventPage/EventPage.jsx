import React from "react";
import "./EventPage.css";
import TextEvent from "../../components/textEvent/TextEvent";
import eventBackground from "../../assets/eventsImage/img2.jpg";
import calendarIcon from "../../assets/icons/calendar.svg";
import locationIcon from "../../assets/icons/location.svg";
import ticketIcon from "../../assets/icons/ticket.svg";
import backImg from "../../assets/icons/Icons+Indicators---System-Icons---chevron_right---#333333.png";
import { useNavigate } from "react-router-dom";
import Text from "../../components/text/Text";

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
            <div className="page-back " onClick={handleNavigate}>
              <img src={backImg} alt="" className="back-icon" />
            </div>

            <div className="page-title">
              <Text
                text={"Dave"}
                family={"open-sans"}
                lineheight={"l24"}
                size={"s18"}
                weight={"bold"}
                color={"white"}
              />
            </div>
          </div>
        </div>

        <div className="event-page-details">
          <div className="event-page-price">
            <div className="pagename">
              <Text
                text={"Dave"}
                family={"open-sans"}
                lineheight={"l27"}
                size={"s20"}
                weight={"bold"}
                color={"white"}
              />
            </div>

            <div className="pageprice">
              <Text
                text={"$45.00"}
                family={"open-sans"}
                lineheight={"l13"}
                size={"s16"}
                weight={"bold"}
                color={"black"}
              />
            </div>
          </div>
          <div className="pageweb">
            <div className="page-specification">
              <div className="bg">
                <img src={calendarIcon} alt="" />
              </div>
              <div className="date-time">
                <div className="roww">
                  <div className="pagedate">
                    <Text
                      text={"02"}
                      family={"open-sans"}
                      lineheight={"l22"}
                      size={"s16"}
                      weight={"bold"}
                      color={"white"}
                    />
                  </div>
                  <div className="pagemonth">
                    <Text
                      text={"September"}
                      family={"open-sans"}
                      lineheight={"l22"}
                      size={"s16"}
                      weight={"regular"}
                      color={"white"}
                    />
                  </div>
                </div>
                <hr className="spacer" />
                <div className="roww">
                  <div className="pagedate">
                    <Text
                      text={"10:00 PM"}
                      family={"open-sans"}
                      lineheight={"l22"}
                      size={"s16"}
                      weight={"bold"}
                      color={"white"}
                    />
                  </div>
                  <div className="pageday">
                    <Text
                      text={"Tuesday"}
                      family={"open-sans"}
                      lineheight={"l22"}
                      size={"s16"}
                      weight={"regular"}
                      color={"white"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="page-specification">
              <div className="bg">
                <img src={locationIcon} alt="" />
              </div>
              <div>
                <Text
                  text={"Amsterdam, Netherlands"}
                  family={"open-sans"}
                  lineheight={"l22"}
                  size={"s16"}
                  weight={"regular"}
                  color={"white"}
                />
              </div>
            </div>
            <div className="page-specification">
              <div className="bg">
                <img src={ticketIcon} alt="" />
              </div>
              <div>
                <Text
                  text={"5 tickets"}
                  family={"open-sans"}
                  lineheight={"l22"}
                  size={"s16"}
                  weight={"regular"}
                  color={"white"}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="page-about">
          <div>
            {" "}
            <div className="page-about-title">
              <Text
                text={"About"}
                family={"open-sans"}
                lineheight={"l22"}
                size={"s16"}
                weight={"bold"}
                color={"white"}
              />
            </div>
            <TextEvent
              description={
                "Lorem ipsum dolor sit amet. Ea nobis corporis ad fugiat culpa ut quibusdam soluta aut aliquid saepe. Est explicabo neque aut molestiae doloribus At fugiat ipsum non cupiditate soluta sed dolorem asperiores aut quia perferendis sed possimus officiis."
              }
            />
          </div>

          <button className="order-ticket">
            <img src={ticketIcon} alt="" />
            <div>
              <Text
                text={"Tickets"}
                family={"open-sans"}
                lineheight={"l22"}
                size={"s16"}
                weight={"regular"}
                color={"white"}
              />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default EventPage;
