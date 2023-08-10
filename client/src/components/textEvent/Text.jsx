import React from "react";
import "./Text.css";

const Text = ({ description }) => {
  return (
    <>
      <p className="about-description">{description}</p>
    </>
  );
};
export default Text;
