import { useState } from "react";

import standard from "../standardInfo.js";
import "./Versebar.css";

import dropdownImg from "../assets/dropdown-white.png";

export default function Versebar({
  weightFighters,
  selectedData,
  changeWeight,
  changeFighters,
}) {
  const [whichListShown, setWhichListShown] = useState(null);

  // Show WeightClass List
  function toggleWeightList() {
    if (whichListShown === "WeightClass") setWhichListShown(null);
    else setWhichListShown("WeightClass");
  }

  // Show Fighter List
  function toggleFightersList(list) {
    if (whichListShown === "red" || whichListShown === "blue")
      setWhichListShown(null);
    else setWhichListShown(list);
  }

  // Choose WeightClass
  function handleWeightChange(id) {
    changeWeight(id);
    setWhichListShown(null);
  }

  // Choose Fighter
  function handleFighterChange(id, side) {
    changeFighters(id, side);
    setWhichListShown(null);
  }

  // Print list of Weight Classes
  const weightClassList = standard.weightClasses.map((weight, index) => {
    return (
      <div key={index} onClick={() => handleWeightChange(index)}>
        {weight.toUpperCase()}
      </div>
    );
  });

  // Print list of Fighters
  const fighterList = weightFighters.map((fighter) => {
    return (
      <div
        key={fighter._id}
        onClick={() => handleFighterChange(fighter._id, whichListShown)}
      >
        {fighter.firstName.toUpperCase() +
          (fighter.nickname ? ` "${fighter.nickname.toUpperCase()}" ` : " ") +
          fighter.lastName.toUpperCase()}
      </div>
    );
  });

  const fighterSelection = ["red", "blue"].map((side, index) => {
    return (
      <div
        key={index}
        className="versus__fighters__fighter"
        onClick={() => toggleFightersList(side)}
      >
        <img className="versus__fighters__fighter__img" src={dropdownImg} />
        <div className="versus__fighters__fighter__container">
          <div className="versus__fighters__fighter__container__scroll">
            {`${selectedData[side].firstName.toUpperCase()} ${
              selectedData[side].nickname &&
              `"${selectedData[side].nickname.toUpperCase()}" `
            }${selectedData[side].lastName.toUpperCase()}`}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="versus">
      {whichListShown === "WeightClass" && (
        <div className="versus__weight-pickup">{weightClassList}</div>
      )}
      <div className="versus__weightclass" onClick={toggleWeightList}>
        <span>{selectedData.weightClass.toUpperCase()}</span>
        <img className="versus__weightclass__img" src={dropdownImg} />
      </div>
      {(whichListShown === "red" || whichListShown === "blue") && (
        <div className="versus__fighter-pickup">{fighterList}</div>
      )}
      <div className="versus__fighters">{fighterSelection}</div>
    </div>
  );
}
