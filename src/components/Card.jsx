import FighterInfo from "./cards/FighterInfo";
import Perk from "./cards/Perk";
import StandUp from "./cards/StandUp";
import Grappling from "./cards/Grappling";
import Health from "./cards/Health";
import "./Card.css";

export default function Card({ fighters }) {
  return (
    <div className="all-cards">
      <FighterInfo
        red={fighters.redFighter.basic}
        blue={fighters.blueFighter.basic}
      />
      <Perk red={fighters.redFighter.perks} blue={fighters.blueFighter.perks} />
      <StandUp
        red={fighters.redFighter.stats.standUp}
        blue={fighters.blueFighter.stats.standUp}
      />
      <Grappling
        red={fighters.redFighter.stats.grappling}
        blue={fighters.blueFighter.stats.grappling}
      />
      <Health
        red={fighters.redFighter.stats.health}
        blue={fighters.blueFighter.stats.health}
      />
    </div>
  );
}
