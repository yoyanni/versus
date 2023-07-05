import React from "react";
import { Link, useParams } from "react-router-dom";

import standard from "../standardInfo.js";

export default function fighter({ fighters }) {
  const { id } = useParams();
  const fighter = fighters.find((f) => f._id === Number(id));

  if (!fighter)
    return (
      <>
        <div>
          <Link to="/fighters">Back</Link>
        </div>
        <div>Fighter not found, please try again.</div>
      </>
    );

  const movesJSX = standard.moveKeys.map((key, index) => {
    let innerJSX;
    const title = key[0].toUpperCase() + key.slice(1);
    if (standard.groundKeys.includes(key)) {
      innerJSX = fighter.moves.ground[key].map((move, index) => {
        return (
          <div key={index}>
            {move.name}: {move.level}
          </div>
        );
      });

      return (
        <div key={index}>
          <strong>{title}</strong>
          {innerJSX}
        </div>
      );
    } else {
      innerJSX = fighter.moves[key].map((move, index) => {
        return (
          <div key={index}>
            {move.name}: {move.level}
          </div>
        );
      });
      return (
        <div key={index}>
          <strong>{title}</strong>
          {innerJSX}
        </div>
      );
    }
  });
  return (
    <>
      <h2>
        {fighter.firstName +
          (fighter.nickname ? ` '${fighter.nickname}' ` : " ") +
          fighter.lastName}
      </h2>
      <Link to="/fighters">Back</Link>{" "}
      <Link to={`/fighters/${fighter._id}/update`}>Edit</Link>
      <div>
        <div>
          <strong>Weight Class: </strong> {fighter.weightClass}
        </div>
        <div>
          <strong>Rank: </strong>
          {fighter.rank ? `${fighter.rank}` : "Not Ranked"}
        </div>
      </div>
      {movesJSX}
    </>
  );
}
