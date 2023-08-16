import React from "react";
import SearchBox from "../../components/search/SearchBox";
import SuggestedCard from "../../components/suggestedCard/SuggestedCard";
import "./Home.css";
import Suggested1 from "../../assets/eventsImage/img5.jpeg";
import Suggested2 from "../../assets/eventsImage/img1.jpg";
import EventPhoto1 from "../../assets/eventsImage/img2.jpg";
import EventPhoto2 from "../../assets/eventsImage/img4.jpg";
import EventPhoto3 from "../../assets/eventsImage/img3.jpg";
import CategoryEvents from "../../components/upcomingEvents/CategoryEvents";
import UpComingCard from "../../components/upcomingEvents/UpComingCard";
import Navbar from "../../components/navbar/Navbar";
import Text from "../../components/text/Text";

const Home = (props) => {
  return (
    <>
      <div className="home">
        <Navbar />
        <hr className="show-web" />
        <SearchBox />
        <main>
          <div className="suggested-title">
            <Text
              text={"Suggested"}
              family={"open-sans"}
              lineheight={"l24"}
              size={"s18"}
              weight={"bold"}
              color={"white"}
            />
          </div>

          <div className="suggested-card">
            <SuggestedCard
              date={"24 Feb"}
              time={"19-30"}
              title={"Dave - We're all alone in this together UK tour 2022"}
              bgImage={Suggested1}
            />
            <SuggestedCard
              date={"12 Aug"}
              time={"20-00"}
              title={"Dave - We're all alone in this together UK tour 2022"}
              bgImage={Suggested2}
            />
            <SuggestedCard
              date={"13 Aug"}
              time={"20-00"}
              title={"Dave - We're all alone in this together UK tour 2022"}
              bgImage={Suggested1}
            />
          </div>

          <div className="upcoming-events">
            <div className="upcoming-title">
              <Text
                text={"Upcoming events"}
                family={"open-sans"}
                lineheight={"l24"}
                size={"s18"}
                weight={"bold"}
                color={"white"}
              />
            </div>
            <div className="category">
              <CategoryEvents category={"All"} />
              <CategoryEvents category={"Free"} />
              <CategoryEvents category={"Limited"} />
              <CategoryEvents category={"Concert"} />
              <CategoryEvents category={"Festival"} />
              <CategoryEvents category={"Electronic"} />
            </div>

            <div className="sub-text">
              <Text
                text={"Total events: 150"}
                family={"open-sans"}
                lineheight={"l19"}
                size={"s14"}
                weight={"regular"}
                color={"lightgray"}
              />
            </div>
            <div className="events-card">
              <UpComingCard
                date={"02"}
                month={"Sep"}
                price={"$45.00"}
                tittle={"Dave"}
                location={"Amsterdam,Netherlands"}
                time={"10:00 PM"}
                eventImg={EventPhoto1}
              />

              <UpComingCard
                date={"02"}
                month={"Sep"}
                price={"$45.00"}
                tittle={"Dave"}
                location={"Amsterdam,Netherlands"}
                time={"10:00 PM"}
                eventImg={EventPhoto2}
              />

              <UpComingCard
                date={"02"}
                month={"Sep"}
                price={"$45.00"}
                tittle={"Dave"}
                location={"Amsterdam,Netherlands"}
                time={"10:00 PM"}
                eventImg={EventPhoto3}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default Home;
