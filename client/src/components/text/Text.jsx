import React from "react";
import "./Text.css";
const Text = ({ text, family, weight, size, color, lineheight }) => {
  return (
    <div className={`${family} ${weight} ${size} ${color} ${lineheight}`}>
      {text}
    </div>
  );
};
export default Text;
