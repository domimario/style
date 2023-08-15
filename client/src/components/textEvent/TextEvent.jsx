import React from "react";
import "./TextEvent.css";

const Text = ({ description }) => {
  return (
    <>
      <p className="about-description">{description}</p>
    </>
  );
};
export default Text;
