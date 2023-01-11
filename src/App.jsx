import { useState } from "react";
import Navbar from "./components/Navbar";
import Versebar from "./components/Versebar";
import Card from "./components/Card";

import data from "./data.js";

import "./App.css";

//Placeholders
const initialRed = data.find((red) => red.id == 1);
const initialBlue = data.find((blue) => blue.id == 3);

function App() {
  // seems like both states will reside in the App component because both are needed here
  const [fighters, setFighters] = useState({
    redFighter: initialRed,
    blueFighter: initialBlue,
  });
  const [weightClass, setWeightClass] = useState("STRAWWEIGHT");

  // Looks up Fighters filtered by weightClass State
  const filteredFighters = data.filter(
    (fighter) => fighter.weightClass.toLowerCase() == weightClass.toLowerCase()
  );

  // Changes the weightClass State
  function changeWeight(e) {
    if (weightClass.toLowerCase() != e.target.textContent.toLowerCase()) {
      setWeightClass(e.target.textContent);
      // When weightClass changes the fighters need to change to the respective weight
      // setFighters({
      //     redFighter: {},
      //     blueFighter: {},
      // });
    } else {
      return;
    }
  }

  // Changes the fighters State
  function changeFighters(e) {
    const newFighter = data.find((fighter) => fighter.id == e.target.id);
    let side = e.target.dataset.side == "red" ? "redFighter" : "blueFighter";
    setFighters((prevState) => ({ ...prevState, [side]: newFighter }));
  }

  return (
    <div className="app">
      <Navbar />
      <Card fighters={fighters} />
      <Versebar
        weightClass={weightClass}
        filteredFighters={filteredFighters}
        changeFighters={changeFighters}
        changeWeight={changeWeight}
        red={fighters.redFighter}
        blue={fighters.blueFighter}
      />
    </div>
  );
}

export default App;
