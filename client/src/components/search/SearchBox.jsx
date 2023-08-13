import React from "react";
import "./SearchBox.css";
import searchIcon from "../../assets/icons/search.svg";
import filterIcon from "../../assets/icons/filter.svg";

const SearchBox = (props) => {
  return (
    <>
      <div className="search-box">
        <div className="search-content">
          <img src={searchIcon} alt="" className="search-icon" />
          <input type="text" placeholder="Search all events..." className="search-input" />
        </div>
        <img src={filterIcon} alt="" className="search-filter" />
      </div>
    </>
  );
};
export default SearchBox;
