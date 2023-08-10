import React from "react";
import SearchBox from "../../components/search/SearchBox";
import SuggestedCard from "../../components/suggestedCard/SuggestedCard";
import "./Home.css";
import Suggested1 from "../../assets/img5.jpeg";
import Suggested2 from "../../assets/img1.jpg";
import EventPhoto1 from "../../assets/img2.jpg";
import EventPhoto2 from "../../assets/img4.jpg";
import EventPhoto3 from "../../assets/img3.jpg";
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
          <h3 className="suggested-tittle">Suggested</h3>
          <div className="suggested-card">
            <SuggestedCard
              date={"11 Aug"}
              time={"20-00"}
              tittle={"We're all alone in this together UK tour 2022"}
              bgImage={Suggested1}
            />
            <SuggestedCard
              date={"11 Aug"}
              time={"19-45"}
              tittle={"We're all alone in this together UK tour 2022"}
              bgImage={Suggested2}
            />
            <SuggestedCard
              date={"11 Aug"}
              time={"19-45"}
              tittle={"We're all alone in this together UK tour 2022"}
              bgImage={Suggested1}
            />
            <SuggestedCard
              date={"11 Aug"}
              time={"19-45"}
              tittle={"We're all alone in this together UK tour 2022"}
              bgImage={EventPhoto2}
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
