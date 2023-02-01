import FighterInfo from "./cards/FighterInfo";
import Perk from "./cards/Perk";
import StandUp from "./cards/StandUp";
import Grappling from "./cards/Grappling";
import Health from "./cards/Health";
import "./Card.css";

export default function Card({ fighters }) {
  return (
    <div className="all-cards">
      <FighterInfo red={fighters.red.basic} blue={fighters.blue.basic} />
      <Perk red={fighters.red.perks} blue={fighters.blue.perks} />
      <StandUp
        fighters={fighters}
        red={fighters.red.stats.standUp}
        blue={fighters.blue.stats.standUp}
      />
      <Grappling
        red={fighters.red.stats.grappling}
        blue={fighters.blue.stats.grappling}
      />
      <Health
        red={fighters.red.stats.health}
        blue={fighters.blue.stats.health}
      />
    </div>
  );
}
