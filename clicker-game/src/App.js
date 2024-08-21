import React, { useState } from "react";
import Button from "./Components.jsx/Button";
import Points from "./Components.jsx/Points";
import Upgrades from "./Components.jsx/Upgrades";
import "./css/main.css";

function App() {
  const [count, setCount] = useState(0);
  const [upgrade, setUpgrade] = useState(0);
  const getUpgrade = (count) => {
    if (count >= 100) {
      return <Upgrades />;
    }
  };
  const add = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div className="points">
        <Points count={count} />
      </div>
      <div className="main-div">
        <Button count={count} add={add} />
        {count >= 30 && <Upgrades count={count} getUpgrade={getUpgrade} />}
      </div>
    </div>
  );
}

export default App;
