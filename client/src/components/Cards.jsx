import Card from "./Card";
import standard from "../standardInfo";

import "./Cards.css";

const cardsList = [
  {
    title: "Fighter Info",
    type: "basic",
    skills: standard.basic,
  },
  {
    title: "Perks",
    type: "perks",
    skills: null,
  },
  {
    title: "Stand-Up",
    type: "standUp",
    skills: standard.standUp,
  },
  {
    title: "Grappling",
    type: "grappling",
    skills: standard.grappling,
  },
  {
    title: "Health",
    type: "health",
    skills: standard.health,
  },
];

export default function Cards({ red, blue }) {
  const cards = cardsList.map((card, index) => {
    return (
      <Card
        key={index}
        title={card.title}
        skills={card.skills}
        red={red[card.type]}
        blue={blue[card.type]}
      />
    );
  });

  return <div className="cards">{cards}</div>;
}
