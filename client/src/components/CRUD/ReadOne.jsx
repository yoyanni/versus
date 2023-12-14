import { Link } from "react-router-dom";
import { useState } from "react";

import AccordionItem from "../Accordion/AccordionItem.jsx";
import Accordion from "../Accordion/index.jsx";
import standard from "../../standardInfo.js";
import "./ReadOne.css";

const basicDetailKeys = [
  { title: "Rank: ", key: "rank" },
  { title: "Weight Class: ", key: "weightClass" },
  { title: "Martial Arts: ", parentKey: "skills", key: "martialArt" },
  { title: "Stance: ", parentKey: "skills", key: "stance" },
  { title: "Reach: ", parentKey: "skills", key: "reach" },
  { title: "Level: ", parentKey: "basic", key: "level" },
];

export default function ReadOne({ fighter, handleDelete }) {
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Toggles which Accordion is active
  function handleClick(id) {
    if (id === activeAccordion) setActiveAccordion(null);
    else setActiveAccordion(id);
  }

  // Basic JSX for fighters
  const basicJSX = basicDetailKeys.map((basicKey) => {
    if (!basicKey.parentKey) {
      return (
        <div key={basicKey.key} className="fighter__basic__details">
          <span>{basicKey.title}</span>
          <span className="fighter__basic__details__detail">
            {basicKey.key === "rank"
              ? isNaN(+fighter.rank)
                ? "Not Ranked"
                : `#${fighter.rank}`
              : fighter[basicKey.key]}
          </span>
        </div>
      );
    } else {
      // "basic" or "basic.skills" of the fighter
      if (basicKey.parentKey === "basic") {
        return (
          <div key={basicKey.key} className="fighter__basic__details">
            <span>{basicKey.title}: </span>
            <span className="fighter__basic__details__detail">
              {fighter.basic[basicKey.key]}
            </span>
          </div>
        );
      } else {
        return (
          <div key={basicKey.key} className="fighter__basic__details">
            <span>{basicKey.title} </span>
            <span className="fighter__basic__details__detail">
              {fighter.basic.skills[basicKey.key]}
            </span>
          </div>
        );
      }
    }
  });

  // Stat JSX for fighters
  const statJSX = standard.statKeys.map((statKey) => {
    return (
      <Accordion
        key={statKey.key}
        nestLevel="one"
        title={statKey.name}
        handleClick={handleClick}
        hasOwnState
      >
        <AccordionItem nestLevel="two">
          {statKey.name}: {fighter[statKey.key].level}
        </AccordionItem>
        {standard[statKey.key].map((stat) => (
          <AccordionItem key={stat.propName} nestLevel="two">
            {stat.name}: {fighter[statKey.key].skills[stat.propName]}
          </AccordionItem>
        ))}
      </Accordion>
    );
  });

  // Move JSX for fighters
  const movesJSX = standard.moveKeys.map((key) => {
    const title = key[0].toUpperCase() + key.slice(1);
    if (key === "ground") {
      return (
        <Accordion
          key="Ground"
          nestLevel="one"
          title="Ground"
          handleClick={handleClick}
          hasOwnState
        >
          {standard.groundKeys.map((groundKey, groundKeyIndex) => {
            const groundTitle = groundKey[0].toUpperCase() + groundKey.slice(1);
            return (
              <Accordion
                key={groundKeyIndex}
                nestLevel="two"
                title={groundTitle}
                hasOwnState
              >
                {fighter.moves.ground[groundKey].map((move, groundIndex) => {
                  return (
                    <AccordionItem key={groundIndex} nestLevel="three">
                      {move.name}: {move.level}
                    </AccordionItem>
                  );
                })}
              </Accordion>
            );
          })}
        </Accordion>
      );
    } else {
      return (
        <Accordion
          key={title}
          nestLevel="one"
          title={title}
          handleClick={handleClick}
          hasOwnState
        >
          {fighter.moves[key].map((move, moveIndex) => {
            return (
              <AccordionItem key={moveIndex} nestLevel="two">
                {move.name}: {move.level}
              </AccordionItem>
            );
          })}
        </Accordion>
      );
    }
  });

  return (
    <div className="fighter">
      <div className="fighter__basic">
        <h1 className="fighter__basic__header">
          {fighter.firstName +
            (fighter.nickname ? ` '${fighter.nickname}' ` : " ") +
            fighter.lastName}
        </h1>
        {basicJSX}
      </div>
      <div className="fighter__moves">
        <Accordion
          title="Stats"
          handleClick={handleClick}
          activeAccordion={activeAccordion}
        >
          {statJSX}
        </Accordion>
        <Accordion
          title="Moves"
          handleClick={handleClick}
          activeAccordion={activeAccordion}
        >
          {movesJSX}
        </Accordion>
      </div>
      <div className="fighter__buttons">
        <Link
          to={`/fighters/${fighter._id}/update`}
          className="fighter__buttons__edit"
        >
          Edit
        </Link>
        <Link
          onClick={() => handleDelete(fighter._id)}
          className="fighter__buttons__delete"
        >
          Delete
        </Link>
      </div>
    </div>
  );
}
