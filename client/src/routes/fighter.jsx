import React from "react";
import { useParams } from "react-router-dom";

import standard from "../standardInfo.js";

export default function fighter({ fighters }) {
  const { id } = useParams();
  const fighter = fighters.find((f) => f._id === Number(id));
  console.log(fighter);
  const movesJSX = standard.moveKeys.map((key, index) => {
    console.log(key);
    let innerJSX;
    const title = key[0].toUpperCase() + key.slice(1);
    if (standard.groundKeys.includes(key)) {
      innerJSX = fighter?.moves.ground[key].map((move, index) => {
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
      innerJSX = fighter?.moves[key].map((move, index) => {
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
    fighters.length !== 0 && (
      <>
        <h2>
          {fighter.firstName +
            (fighter.nickname ? ` '${fighter.nickname}' ` : " ") +
            fighter.lastName}
        </h2>
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
    )
  );
}
