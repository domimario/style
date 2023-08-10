import React from "react";
import "./SearchBox.css";
import searchIcon from "../../assets/search.svg";
import filterIcon from "../../assets/filter.svg";

const SearchBox = (props) => {
  return (
    <>
      <div className="search-box">
        <div className="search-content">
          <div className="search-icon">
            <img src={searchIcon} alt="" />
            <input type="text" placeholder="Search all events..." />
          </div>
          <div className="search-filter">
            <img src={filterIcon} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchBox;
