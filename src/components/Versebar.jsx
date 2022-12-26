import React from "react";

import { nanoid } from "nanoid";

import "./Versebar.css";

import dropdownImg from "../assets/dropdown-white.png";

export default function Versebar(prop) {
  // At the moment seems like weight is only required in the Versebar

  function toggleDropdown(e) {
    let dropdown = document.getElementById("dropdown-content").style;
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

  return (
    <div className="versus">
      <div id="dropdown-content">{fighterList}</div>
      <div className="weightclass-container">
        <span className="weight">{prop.weight.toUpperCase()}</span>
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
