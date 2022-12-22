import FighterInfo from "./cards/FighterInfo";
import Perk from "./cards/Perk";
import StandUp from "./cards/StandUp";
import Grappling from "./cards/Grappling";
import Health from "./cards/Health";
import "./Card.css";

export default function Card() {
  return (
    // className="basic-card"||"perk-card"||"standup-card"||"grap-card"||"health-card"
    <div className="all-cards">
      <FighterInfo />
      <Perk />
      <StandUp />
      <Grappling />
      <Health />
    </div>
  );
}
