import React from "react";
import Points from "./Points";

const Button = ({ count, add }) => {
  return (
    <div>
      <h1>{count}</h1>
      <button className="button" onClick={add}>
        Click!
      </button>
    </div>
  );
};

export default Button;
