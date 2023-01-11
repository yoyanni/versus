import { useState } from "react";

import "./Versebar.css";

import dropdownImg from "../assets/dropdown-white.png";

const weightClasses = [
  "Generic",
  "Strawwight",
  "Flyweight (W)",
  "Bantamweight (W)",
  "Flyweight",
  "Bantamweight",
  "Featherweight",
  "Lightweight",
  "Welterweight",
  "Middleweight",
  "Light Heavyweight",
  "Heavyweight",
];

export default function Versebar({
  weightClass,
  filteredFighters,
  changeFighters,
  changeWeight,
  red,
  blue,
}) {
  const [isWeightShown, setIsWeightShown] = useState(false);
  const [areFightersShown, setAreFightersShown] = useState(false);
  const [side, setSide] = useState("");

  // UI Weight
  function toggleWeight() {
    setIsWeightShown((prevState) => !prevState);
    areFightersShown
      ? setAreFightersShown((prevState) => !prevState)
      : areFightersShown;
  }
  // UI FIghters
  function toggleFighters(e) {
    setSide(e.target.id);
    setAreFightersShown((prevState) => !prevState);
    isWeightShown ? setIsWeightShown((prevState) => !prevState) : isWeightShown;
  }

  // Print list of Fighters
  const fighterList = filteredFighters.map((fighter) => {
    return (
      <p
        key={fighter.id}
        id={fighter.id}
        data-side={side}
        onClick={changeFighters}
      >
        {fighter.firstName.toUpperCase() +
          (fighter.nickname ? ` "${fighter.nickname.toUpperCase()}" ` : " ") +
          fighter.lastName.toUpperCase()}
      </p>
    );
  });

  // Print list of Weight Classes
  const weightClassList = weightClasses.map((weight, index) => {
    return (
      <p key={index} onClick={changeWeight}>
        {weightClass.toUpperCase()}
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
          {weightClass.toUpperCase()}
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
