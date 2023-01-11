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
      <p key={index} onClick={() => handleWeightClick(index)}>
        {weight.toUpperCase()}
      </p>
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
      <p key={fighter.id} onClick={() => handleFighterClick(fighter.id, side)}>
        {fighter.firstName.toUpperCase() +
          (fighter.nickname ? ` "${fighter.nickname.toUpperCase()}" ` : " ") +
          fighter.lastName.toUpperCase()}
      </p>
    );
  });

  return (
    <div className="versus">
      <div className={areFightersShown ? "dropdown shown" : "dropdown hidden"}>
        {fighterList}
      </div>
      <div className={isWeightShown ? "dropdown shown" : "dropdown hidden"}>
        {weightClassList}
      </div>
      <div className="weightclass-container">
        <span className="weight" onClick={toggleWeight}>
          {selectedWeight.toUpperCase()}
        </span>
        <img src={dropdownImg} />
      </div>
      <div className="fighter-container">
        <div className="fighter-select" onClick={toggleFighters}>
          <span id="red" className="red-fighter">
            {red.lastName.toUpperCase()}
          </span>
          <img src={dropdownImg} />
        </div>
        <span className="vs">VS</span>
        <div className="fighter-select" onClick={toggleFighters}>
          <span id="blue" className="blue-fighter">
            {blue.lastName.toUpperCase()}
          </span>
          <img src={dropdownImg} />
        </div>
      </div>
    </div>
  );
}
