import React from "react";
import "./CategoryEvents.css";
import Text from "../text/Text";
const CatergoryEvents = ({ category }) => {
  return (
    <>
      <button className="category-button">
        <Text
          text={`${category}`}
          family={"open-sans"}
          lineheight={"l22"}
          size={"s16"}
          weight={"regular"}
          color={"gray"}
        />
      </button>
    </>
  );
};
export default CatergoryEvents;
