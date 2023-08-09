import React from "react";
import "./SearchBox.css";

const SearchBox = (props) => {
  return (
    <>
      <div className="search-box">
        <div className="search-content">
          <div className="search-icon">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search all events..." />
          </div>
          <div className="search-filter">
            <i class="fa-solid fa-sliders fa-rotate-90"></i>
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchBox;
