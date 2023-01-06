import React from "react";
import Navbar from "./components/Navbar";
import Versebar from "./components/Versebar";
import Card from "./components/Card";

import data from "./data.js";

import "./App.css";

function App() {
  // seems like both states will reside in the App component because both are needed here
  const [fighters, setFighters] = React.useState({
    redFighter: {},
    blueFighter: {},
  });
  const [weightClass, setWeightClass] = React.useState("LIGHTWEIGHT");

  const filteredFighters = data.filter(
    (fighter) => fighter.weightClass.toLowerCase() == weightClass.toLowerCase()
  );

  function changeWeight(e) {
    if (weightClass.toLowerCase() != e.target.textContent.toLowerCase()) {
      setWeightClass(e.target.textContent);
      setFighters({
        redFighter: {},
        blueFighter: {},
      });
    } else {
      return;
    }
  }

  function changeFighters(e) {
    const newFighter = data.filter((fighter) => fighter.id == e.target.id);
    let side = e.target.dataset.side == "red" ? "redFighter" : "blueFighter";
    setFighters((prevState) => ({ ...prevState, [side]: newFighter }));
  }

  return (
    <div className="app">
      <Navbar />
      <Card />
      <Versebar
        weight={weightClass}
        list={filteredFighters}
        changeFighters={changeFighters}
        changeWeight={changeWeight}
      />
    </div>
  );
}

export default App;
