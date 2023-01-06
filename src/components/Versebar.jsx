import React from "react";

import "./Versebar.css";

import dropdownImg from "../assets/dropdown-white.png";

export default function Versebar(prop) {
  const [isWeightShown, setIsWeightShown] = React.useState(false);
  const [areFightersShown, setAreFightersShown] = React.useState(false);
  const [side, setSide] = React.useState("");
  const weightClasses = [
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

  function toggleWeight() {
    setIsWeightShown((prevState) => !prevState);
    areFightersShown
      ? setAreFightersShown((prevState) => !prevState)
      : areFightersShown;
  }

  function toggleFighters(e) {
    setSide(e.target.id);
    setAreFightersShown((prevState) => !prevState);
    isWeightShown ? setIsWeightShown((prevState) => !prevState) : isWeightShown;
  }

  const fighterList = prop.list.map((fighter) => {
    return (
      <p
        key={fighter.id}
        id={fighter.id}
        data-side={side}
        onClick={prop.changeFighters}
      >
        {fighter.firstName.toUpperCase() +
          (fighter.nickname ? ` "${fighter.nickname.toUpperCase()}" ` : " ") +
          fighter.lastName.toUpperCase()}
      </p>
    );
  });

  const weightClassList = weightClasses.map((weight, index) => {
    return (
      <p key={index} onClick={prop.changeWeight}>
        {weight.toUpperCase()}
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
          {prop.weight.toUpperCase()}
        </span>
        <img src={dropdownImg} />
      </div>
      <div className="fighter-container">
        <div className="fighter-select" onClick={toggleFighters}>
          <span id="red" className="red-fighter">
            MCGREGOR
          </span>
          <img src={dropdownImg} />
        </div>
        <span className="vs">VS</span>
        <div className="fighter-select" onClick={toggleFighters}>
          <span id="blue" className="blue-fighter">
            POIRIER
          </span>
          <img src={dropdownImg} />
        </div>
      </div>
    </div>
  );
}
