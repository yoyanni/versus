import { useState } from "react";
import Navbar from "./components/Navbar";
import Versebar from "./components/Versebar";
import Card from "./components/Card";

import data from "./data.js";

import "./App.css";

const weightClasses = [
  "Heavyweight",
  "Light Heavyweight",
  "Middleweight",
  "Welterweight",
  "Lightweight",
  "Featherweight",
  "Bantamweight",
  "Flyweight",
  "Bantamweight (W)",
  "Flyweight (W)",
  "Strawwight",
];

const defaultFighters = [
  { red: 341, blue: 342 },
  { red: 14, blue: 10 },
  { red: 34, blue: 30 },
  { red: 48, blue: 39 },
  { red: 63, blue: 66 },
  { red: 98, blue: 71 },
  { red: 133, blue: 112 },
  { red: 175, blue: 166 },
  { red: 227, blue: 185 },
  { red: 231, blue: 239 },
  { red: 283, blue: 276 },
  { red: 313, blue: 326 },
];

//Placeholders

function App() {
  // seems like both states will reside in the App component because both are needed here
  const [weightClassId, setWeightClassId] = useState(6);
  const [fighterId, setFighterId] = useState({
    red: 133,
    blue: 112,
  });

  const selectedWeight = weightClasses[weightClassId];
  const selectedFighters = {
    red: data.find((red) => red.id == fighterId.red),
    blue: data.find((blue) => blue.id == fighterId.blue),
  };

  // Looks up Fighters filtered by weightClass State
  const weightFighters = data.filter((fighter) => {
    return (
      fighter.weightClass.toLowerCase() == selectedWeight.toLowerCase() ||
      fighter.weightClass.toLowerCase() == "generic"
    );
  });

  // Changes the weightClass State
  function changeWeight(id) {
    if (weightClassId == id) {
      return;
    }

    setWeightClassId(id);
    setFighterId(defaultFighters[id]);
  }

  // Changes the fighters State
  function changeFighters(id, side) {
    setFighterId((prevState) => ({ ...prevState, [side]: id }));
  }

  return (
    <div className="app">
      <Navbar />
      <Card fighters={selectedFighters} />
      <Versebar
        weightClasses={weightClasses}
        selectedWeight={selectedWeight}
        weightFighters={weightFighters}
        red={selectedFighters.red}
        blue={selectedFighters.blue}
        changeFighters={changeFighters}
        changeWeight={changeWeight}
      />
    </div>
  );
}

export default App;
