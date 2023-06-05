import { useState } from "react";
import "./Card.css";

export default function Card({ title, skills, red, blue }) {
  const [isShown, setIsShown] = useState(null);

  function handleClick(obj) {
    if (isShown === null) {
      console.log(obj);
      setIsShown(obj);
    } else {
      setIsShown(null);
    }
  }

  let content;
  // Goes through each skill in each type (Stand-Up, Grappling, Health)
  // then finds the level of that skill for both red and blue
  if (title !== "Perks") {
    content = skills.map((skill, index) => {
      const redSkill = red.skills.find((sk) => sk.name === skill);
      const blueSkill = blue.skills.find((sk) => sk.name === skill);
      return (
        <Skill
          key={index}
          skillName={skill}
          redLevel={redSkill.level}
          blueLevel={blueSkill.level}
        />
      );
    });
  } else {
    let colorClass;
    const redPerks = red.map((perk, index) => {
      if (perk.type === "Stand-Up") colorClass = "standup";
      else if (perk.type === "Grappling") colorClass = "grappling";
      else colorClass = "health";
      return (
        <div
          key={index}
          className={`cards__card__content__perks__red-set__perk ${colorClass}`}
          onClick={() => handleClick({ red: index })}
        >
          {isShown?.red === index && (
            <span className="cards__card__content__perks__red-set__perk__tooltip">
              {perk.description}
            </span>
          )}
          {perk.name}
        </div>
      );
    });
    const bluePerks = blue.map((perk, index) => {
      if (perk.type === "Stand-Up") colorClass = "standup";
      else if (perk.type === "Grappling") colorClass = "grappling";
      else colorClass = "health";
      return (
        <div
          key={index}
          className={`cards__card__content__perks__blue-set__perk ${colorClass}`}
          onClick={() => handleClick({ blue: index })}
        >
          {isShown?.blue === index && (
            <span className="cards__card__content__perks__blue-set__perk__tooltip">
              {perk.description}
            </span>
          )}

          {perk.name}
        </div>
      );
    });

    content = (
      <div className="cards__card__content__perks">
        <div className="cards__card__content__perks__red-set">{redPerks}</div>
        <div className="cards__card__content__perks__blue-set">{bluePerks}</div>
      </div>
    );
  }

  return (
    <Container title={title} red={red} blue={blue}>
      {content}
    </Container>
  );
}

function Container({ children, title, red, blue }) {
  let redAverage;
  let blueAverage;
  // Reducers for Average Skill level
  if (title !== "Perks") {
    const redSum = red.skills.reduce((acc, cur) => {
      return acc + cur.level;
    }, 0);
    const blueSum = blue.skills.reduce((acc, cur) => {
      return acc + cur.level;
    }, 0);

    redAverage = Math.round((redSum / red.skills.length) * 10) / 10;
    blueAverage = Math.round((blueSum / blue.skills.length) * 10) / 10;
  }

  return (
    <div className="cards__card">
      <div className="cards__card__title-container">
        <span className="cards__card__title-container__level">
          {title !== "Perks" ? red.level : red.length}
          {title !== "Perks" && title !== "Fighter Info" && `(${redAverage})`}
        </span>
        <span>{title}</span>
        <span className="cards__card__title-container__level">
          {title !== "Perks" ? blue.level : blue.length}
          {title !== "Perks" && title !== "Fighter Info" && `(${blueAverage})`}
        </span>
      </div>
      <div className="cards__card__content">{children}</div>
    </div>
  );
}

function Skill({ skillName, redLevel, blueLevel }) {
  let redClass;
  let blueClass;
  if (typeof redLevel === "number") {
    redClass =
      redLevel > blueLevel
        ? "cards__card__content__stat-pair__stat--redActive"
        : "cards__card__content__stat-pair__stat";
    blueClass =
      blueLevel > redLevel
        ? "cards__card__content__stat-pair__stat--blueActive"
        : "cards__card__content__stat-pair__stat";
  } else {
    redClass =
      redLevel !== blueLevel
        ? "cards__card__content__stat-pair__stat--redActive"
        : "cards__card__content__stat-pair__stat";
    blueClass =
      blueLevel !== redLevel
        ? "cards__card__content__stat-pair__stat--blueActive"
        : "cards__card__content__stat-pair__stat";
  }
  return (
    <>
      <div className="cards__card__content__stat-title">{skillName}</div>
      <div className="cards__card__content__stat-pair">
        <div className={redClass}>{redLevel}</div>
        <div className={blueClass}>{blueLevel}</div>
      </div>
    </>
  );
}
