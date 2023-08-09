import React from "react";
import SearchBox from "../components/search/SearchBox";
import SuggestedCard from "../components/suggestedCard/SuggestedCard";
import "./Home.css";
import Suggested2 from "../assets/suggested2.jpg";
import Suggested4 from "../assets/suggested4.jpg";
import Suggested5 from "../assets/suggested5.jpeg";
import CategoryEvents from "../components/upcomingEvents/CategoryEvents";
import UpComingCard from "../components/upcomingEvents/UpComingCard";

const Home = (props) => {
  return (
    <>
      <div className="home">
        <SearchBox />
        <main>
          <h3 className="suggested-tittle">Suggested</h3>
          <div className="suggested-card">
            <SuggestedCard
              date={"11 Aug"}
              time={"20-00"}
              tittle={"We're all alone in this together UK tour 2022"}
              bgImage={Suggested2}
            />
            <SuggestedCard
              date={"11 Aug"}
              time={"19-45"}
              tittle={"We're all alone in this together UK tour 2022"}
              bgImage={Suggested4}
            />
            <SuggestedCard
              date={"11 Aug"}
              time={"19-45"}
              tittle={"We're all alone in this together UK tour 2022"}
              bgImage={Suggested5}
            />
          </div>
          <div className="upcoming-events">
            <h3>Upcoming events</h3>
            <div className="category">
              <CategoryEvents category={"All"} isAll={true} />
              <CategoryEvents category={"Free"} />
              <CategoryEvents category={"Limited"} />
              <CategoryEvents category={"Concert"} />
              <CategoryEvents category={"Festival"} />
            </div>
            <p className="upcoming-events-text">Total events: 150</p>
            <div className="events-card">
              <UpComingCard
                date={"02"}
                month={"Sep"}
                price={"45.00$"}
                tittle={"Dave - We're all alone in this together UK tour 2022"}
                location={"Amsterdam,Netherlands"}
                time={"10:00 PM"}
                eventImg={Suggested4}
              />
              <UpComingCard
                date={"02"}
                month={"Sep"}
                price={"45.00$"}
                tittle={"Dave"}
                location={"Amsterdam,Netherlands"}
                time={"10:00 PM"}
                eventImg={Suggested2}
              />
              <UpComingCard
                date={"02"}
                month={"Sep"}
                price={"45.00$"}
                tittle={"Dave"}
                location={"Amsterdam,Netherlands"}
                time={"10:00 PM"}
                eventImg={Suggested5}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default Home;
