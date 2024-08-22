import React from "react";

const Button = ({ count, add, addPoints }) => {
  return (
    <div>
      <button
        className="button"
        onClick={() => {
          add();
          addPoints();
        }}
      >
        <h1>Click!</h1>
      </button>
    </div>
  );
};

export default Button;
