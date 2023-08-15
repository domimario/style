import React from "react";
import "./SearchBox.css";
import searchIcon from "../../assets/icons/search.svg";
import filterIcon from "../../assets/icons/filter.svg";

const SearchBox = (props) => {
  return (
    <div className="search-container">
      <div className="search-box">
        <div className="search-content">
          <img src={searchIcon} alt="Search icon" className="search-icon" />
          <input
            type="text"
            placeholder="Search all events..."
            className="search-input"
          />
        </div>
        <img src={filterIcon} alt="filter icon" className="search-filter" />
      </div>
    </div>
  );
};
export default SearchBox;
