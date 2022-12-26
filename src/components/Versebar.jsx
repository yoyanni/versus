import React from "react";

import { nanoid } from "nanoid";

import "./Versebar.css";

import dropdownImg from "../assets/dropdown-white.png";

export default function Versebar(prop) {
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

  function toggleDropdown(e) {
    let id =
      e.target.className == "weight" ? "dropdown-classes" : "dropdown-fighters";
    let dropdown = document.getElementById(id).style;
    // let dropdownFighters = document.getElementById("dropdown-fighters").style;
    // let dropdownClasses = document.getElementById("dropdown-classes").style;
    dropdown.display == "none"
      ? (dropdown.display = "block")
      : (dropdown.display = "none");
  }

  const fighterList = prop.list.map((fighter) => {
    return (
      <p key={nanoid()}>
        {fighter.firstName +
          (fighter.nickname ? ` "${fighter.nickname}" ` : " ") +
          fighter.lastName}
      </p>
    );
  });

  const weightClassList = weightClasses.map((weight) => {
    return <p key={nanoid()}>{weight.toUpperCase()}</p>;
  });

  return (
    <div className="versus">
      <div id="dropdown-fighters">{fighterList}</div>
      <div id="dropdown-classes">{weightClassList}</div>
      <div className="weightclass-container">
        <span className="weight" onClick={toggleDropdown}>
          {prop.weight.toUpperCase()}
        </span>
        <img src={dropdownImg} />
      </div>
      <div className="fighter-container">
        <div className="fighter-select dropdown" onClick={toggleDropdown}>
          <span className="red-fighter">MCGREGOR</span>
          <img src={dropdownImg} />
        </div>
        <span className="vs">VS</span>
        <div className="fighter-select dropdown" onClick={toggleDropdown}>
          <span className="blue-fighter">POIRIER</span>
          <img src={dropdownImg} />
        </div>
      </div>
    </div>
  );
}
