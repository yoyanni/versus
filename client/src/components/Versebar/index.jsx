import { useState } from "react";

import WeightClass from "./WeightClass";
import Fighters from "./Fighters";
import "./index.css";

export default function Versebar({
  weightFighters,
  selectedData,
  changeWeight,
  changeFighters,
}) {
  const [listShown, setListShown] = useState(null);

  // Switches between lists
  function toggleList(list) {
    if (listShown === list) setListShown(null);
    else setListShown(list);
  }

  // Choose WeightClass
  function handleWeightChange(id) {
    changeWeight(id);
    setListShown(null);
  }

  // Choose Fighter
  function handleFighterChange(id, side) {
    changeFighters(id, side);
    // setListShown(null); // Close list after choosing fighter
  }

  return (
    <div className="versus">
      <WeightClass
        listShown={listShown}
        selectedData={selectedData}
        toggleList={toggleList}
        handleWeightChange={handleWeightChange}
      />
      <Fighters
        selectedData={selectedData}
        listShown={listShown}
        toggleList={toggleList}
        weightFighters={weightFighters}
        handleFighterChange={handleFighterChange}
      />
    </div>
  );
}
