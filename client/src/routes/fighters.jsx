import React from "react";
import { Link } from "react-router-dom";

import standard from "../standardInfo.js";

export default function fighters({ fighters }) {
  const allWC = [...standard.weightClasses, "Generic"];
  const allFighters = allWC.map((wc, index) => {
    const wcFighters = fighters.filter((f) => f.weightClass === wc);
    return (
      <div key={index}>
        <div>{wc}</div>
        <ul>
          {wcFighters.map((fighter, index) => (
            <li key={index}>
              <Link to={`/fighters/${fighter._id}`}>
                {fighter.firstName + " " + fighter.lastName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  });
  return (
    fighters.length !== 0 && (
      <>
        <div>
          <Link to="/fighters/create">Create new Fighter</Link>
        </div>
        <div>{allFighters}</div>
      </>
    )
  );
}
