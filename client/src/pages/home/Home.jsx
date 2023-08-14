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

const Home = (props) => {
  return (
    <>
      <div className="home">
        <Navbar />
        <SearchBox />
        <main>
          <h3 className="suggested-title">Suggested</h3>
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
            <h3 className="upcoming-title">Upcoming events</h3>
            <div className="category">
              <CategoryEvents category={"All"} />
              <CategoryEvents category={"Free"} />
              <CategoryEvents category={"Limited"} />
              <CategoryEvents category={"Concert"} />
              <CategoryEvents category={"Festival"} />
              <CategoryEvents category={"Electronic"} />
            </div>
            <p className="sub-text">Total events: 150</p>
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
                price={"45.00$"}
                tittle={"Dave"}
                location={"Amsterdam,Netherlands"}
                time={"10:00 PM"}
                eventImg={EventPhoto2}
              />

              <UpComingCard
                date={"02"}
                month={"Sep"}
                price={"45.00$"}
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
