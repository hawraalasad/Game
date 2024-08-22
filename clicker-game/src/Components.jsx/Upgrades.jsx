import React, { useState } from "react";

const Upgrades = ({
  count,
  points,
  setPoints,
  activateUpgrade,
  activateSecondUpgrade,
  activateThirdUpgrade,
}) => {
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  return (
    <div>
      {count >= 30 && show1 && (
        <button
          className="upgrade-button"
          onClick={() => {
            activateUpgrade();
            setShow1(false);
          }}
        >
          <h2>Double your sunflowers per click</h2>
        </button>
      )}
      {count >= 60 && show2 && (
        <button
          className="upgrade-button"
          onClick={() => {
            activateSecondUpgrade();
            setShow2(false);
          }}
        >
          <h2>Quadruple your sunflowers per click</h2>
        </button>
      )}
      {count >= 120 && show3 && (
        <button
          className="upgrade-button"
          onClick={() => {
            activateThirdUpgrade();
            setShow3(false);
          }}
        >
          <h2>Get 2000 Sunflowers</h2>
        </button>
      )}
    </div>
  );
};

export default Upgrades;
