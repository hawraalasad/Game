import React, { useState } from "react";
import image from "../assets/beb2c40a8ab90378713bd09496e61950.png";

const Points = ({ points }) => {
  return (
    <div className="points-div">
      <img src={image} className="flower"></img>
      <h1>{points * 2}</h1>
    </div>
  );
};

export default Points;
