import Card from "./Card";
import "./Cards.css";

const skillList = {
  standUp: [
    "Punch Speed",
    "Punch Power",
    "Accuracy",
    "Blocking",
    "Head Movement",
    "Footwork",
    "Switch Stance",
    "Takedown Defence",
    "Kick Power",
    "Kick Speed",
  ],
  grappling: [
    "Takedown",
    "Top Control",
    "Bottom Control",
    "Submission",
    "Submission Defence",
    "Ground Striking",
    "Clinch Striking",
    "Clinch Control",
  ],
  health: ["Cardio", "Chin", "Body", "Legs", "Recovery"],
  basic: ["Martial Arts", "Stance", "Reach"],
};

const cardsList = [
  {
    title: "Fighter Info",
    type: "basic",
    skills: skillList.basic,
  },
  {
    title: "Perks",
    type: "perks",
    skills: null,
  },
  {
    title: "Stand-Up",
    type: "standUp",
    skills: skillList.standUp,
  },
  {
    title: "Grappling",
    type: "grappling",
    skills: skillList.grappling,
  },
  {
    title: "Health",
    type: "health",
    skills: skillList.health,
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
