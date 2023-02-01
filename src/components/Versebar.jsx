import { useState } from "react";

import "./Versebar.css";

import dropdownImg from "../assets/dropdown-white.png";

export default function Versebar({
  weightClasses,
  selectedWeight,
  weightFighters,
  red,
  blue,
  changeFighters,
  changeWeight,
}) {
  const [isWeightShown, setIsWeightShown] = useState(false);
  const [areFightersShown, setAreFightersShown] = useState(false);
  const [side, setSide] = useState("");

  // UI Weight
  function toggleWeight() {
    setIsWeightShown((prevState) => !prevState);
    areFightersShown && setAreFightersShown((prevState) => !prevState);
  }

  //Close UI once chosen
  function handleWeightClick(id) {
    changeWeight(id);
    setIsWeightShown((prevState) => !prevState);
  }

  // Print list of Weight Classes
  const weightClassList = weightClasses.map((weight, index) => {
    return (
      <div key={index} onClick={() => handleWeightClick(index)}>
        {weight.toUpperCase()}
      </div>
    );
  });

  // UI FIghters
  function toggleFighters(e) {
    setSide(e.target.id);
    setAreFightersShown((prevState) => !prevState);
    isWeightShown && setIsWeightShown((prevState) => !prevState);
  }

  //Close UI once chosen
  function handleFighterClick(id, side) {
    changeFighters(id, side);
    setAreFightersShown((prevState) => !prevState);
  }

  // Print list of Fighters
  const fighterList = weightFighters.map((fighter) => {
    return (
      <div
        key={fighter.id}
        onClick={() => handleFighterClick(fighter.id, side)}
      >
        {fighter.firstName.toUpperCase() +
          (fighter.nickname ? ` "${fighter.nickname.toUpperCase()}" ` : " ") +
          fighter.lastName.toUpperCase()}
      </div>
    );
  });

  return (
    <div className="versus shadow-up">
      <div
        className={
          isWeightShown
            ? "dropdown bg-elevated sub-title shown"
            : "dropdown hidden"
        }
      >
        {weightClassList}
      </div>

      <div className="weightclass-container bg-elevated sub-title">
        <span className="weight" onClick={toggleWeight}>
          {selectedWeight.toUpperCase()}
        </span>
        <img src={dropdownImg} />
      </div>

      <div
        className={
          areFightersShown
            ? "dropdown bg-container sub-title shown"
            : "dropdown hidden"
        }
      >
        {fighterList}
      </div>

      <div className="fighter-container bg-container title">
        <div className="fighter-select" onClick={toggleFighters}>
          <img src={dropdownImg} />
          <div className="scroll-container">
            <div id="red" className="red-fighter scroll">
              {`${red.firstName.toUpperCase()} "${red.nickname.toUpperCase()}" ${red.lastName.toUpperCase()}`}
            </div>
          </div>
        </div>

        <div className="fighter-select" onClick={toggleFighters}>
          <img src={dropdownImg} />
          <div className="scroll-container">
            <div id="blue" className="blue-fighter scroll">
              {`${blue.firstName.toUpperCase()} "${blue.nickname.toUpperCase()}" ${blue.lastName.toUpperCase()}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
