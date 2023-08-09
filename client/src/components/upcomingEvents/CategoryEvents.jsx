import React from "react";
import "./CategoryEvents.css";
const CatergoryEvents = ({ category, isAll }) => {
  return (
    <>
      <div className={`category-events ${isAll ? "all" : ""}`}>
        <button className="category-button">{category}</button>
      </div>
    </>
  );
};
export default CatergoryEvents;
