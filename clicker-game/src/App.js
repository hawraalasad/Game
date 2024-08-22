import React, { useState } from "react";
import Button from "./Components.jsx/Button";
import Points from "./Components.jsx/Points";
import Upgrades from "./Components.jsx/Upgrades";
import Count from "./Components.jsx/Count";
import "./css/main.css";
import Footer from "./Components.jsx/Footer";
import Grass from "./Components.jsx/Grass";

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const [upgrade, setUpgrade] = useState(0);
  const [secondUpgrade, setSecondUpgrade] = useState(0);
  const [thirdUpgrade, setThirdUpgrade] = useState(0);
  const [points, setPoints] = useState(0);
  const [i, seti] = useState(1);
  const getUpgrade = (count) => {
    if (count >= 100) {
      return <Upgrades />;
    }
  };
  const dontShow = () => {
    setShow(false);
  };
  let add = () => {
    setCount(count + i);
  };
  const activateUpgrade = () => {
    setPoints(points - 85);
    seti(2);
  };
  const activateSecondUpgrade = () => {
    setPoints(points - 85);
    seti(4);
  };

  const activateThirdUpgrade = () => {
    setPoints(points + 1000);
  };
  const addPoints = () => {
    setPoints(count + i);
  };

  return (
    <div className="page">
      <div className="points">
        <Points points={points} addPoints={addPoints} setPoints={setPoints} />
      </div>
      <div className="main-div">
        <h1>Welcome to your Sunflower garden</h1>
        <h3>Collect Sunflowers to upgrade</h3>
        <div>
          <Count count={count} add={() => add()} />
        </div>
        <Button count={count} add={() => add()} addPoints={() => addPoints()} />
        <div className="upgrade-div">
          <Upgrades
            count={count}
            getUpgrade={getUpgrade}
            points={points}
            activateUpgrade={activateUpgrade}
            activateSecondUpgrade={activateSecondUpgrade}
            show={show}
            dontShow={dontShow}
            activateThirdUpgrade={activateThirdUpgrade}
          />

          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
      {/* <Footer /> */}
      <div
        style={{
          width: "100%",
          height: "40vh",

          alignItems: "flex-end",
          display: "flex",
          gap: 2,
        }}
      >
        <Grass />
        <Grass />
        <Grass />
        <Grass />
        <Grass />
        <Grass />
        <Grass />
        <Grass />
        <Grass />
        <Grass />
        <Grass />
        <Grass />
        <Grass />
        <Grass />
        <Grass />
        <Grass />
        <Grass />
        <Grass />
        <Grass />
        <Grass />
        <Grass />
        <Grass />
        <Grass />
        <Grass />
        <Grass />
        <Grass />
      </div>
    </div>
  );
}

export default App;
