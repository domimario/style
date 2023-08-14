import React from "react";
import "./CategoryEvents.css";
const CatergoryEvents = ({ category }) => {
  return (
    <>
      <button className="category-button">{category}</button>
    </>
  );
};
export default CatergoryEvents;
