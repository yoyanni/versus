import "./StandUp.css";

export default function StandUp({ red, blue }) {
  const redAcc = Object.values(red).reduce((acc, cur, index) => {
    if (index == 0) return acc;
    return acc + cur;
  }, 0);
  const blueAcc = Object.values(blue).reduce((acc, cur, index) => {
    if (index == 0) return acc;
    return acc + cur;
  }, 0);
  const redAverage = Math.round((redAcc / 10) * 10) / 10;
  const blueAverage = Math.round((blueAcc / 10) * 10) / 10;

  return (
    <div className="standup-info shadow">
      <div className="card-title heading-alt">
        <span>
          {red.standUp} ({redAverage})
        </span>
        <span className="heading">Stand-Up</span>
        <span>
          ({blueAverage}) {blue.standUp}
        </span>
      </div>
      <div className="stats">
        <div className="stat-title sub-heading">Punch Speed</div>
        <div className="stat content">
          <div className={red.punchSpeed > blue.punchSpeed ? "red" : undefined}>
            {red.punchSpeed}
          </div>
          <div
            className={blue.punchSpeed > red.punchSpeed ? "blue" : undefined}
          >
            {blue.punchSpeed}
          </div>
        </div>
        <div className="stat-title sub-heading">Punch Power</div>
        <div className="stat content">
          <div className={red.punchPower > blue.punchPower ? "red" : undefined}>
            {red.punchPower}
          </div>

          <div
            className={blue.punchPower > red.punchPower ? "blue" : undefined}
          >
            {blue.punchPower}
          </div>
        </div>
        <div className="stat-title sub-heading">Accuracy</div>
        <div className="stat content">
          <div className={red.accuracy > blue.accuracy ? "red" : undefined}>
            {red.accuracy}
          </div>
          <div className={blue.accuracy > red.accuracy && "blue"}>
            {blue.accuracy}
          </div>
        </div>
        <div className="stat-title sub-heading">Blocking</div>
        <div className="stat content">
          <div className={red.blocking > blue.blocking ? "red" : undefined}>
            {red.blocking}
          </div>
          <div className={blue.blocking > red.blocking ? "blue" : undefined}>
            {blue.blocking}
          </div>
        </div>
        <div className="stat-title sub-heading">Head Movement</div>
        <div className="stat content">
          <div
            className={red.headMovement > blue.headMovement ? "red" : undefined}
          >
            {red.headMovement}
          </div>
          <div
            className={
              blue.headMovement > red.headMovement ? "blue" : undefined
            }
          >
            {blue.headMovement}
          </div>
        </div>
        <div className="stat-title sub-heading">Footwork</div>
        <div className="stat content">
          <div className={red.footwork > blue.footwork ? "red" : undefined}>
            {red.footwork}
          </div>
          <div className={blue.footwork > red.footwork ? "blue" : undefined}>
            {blue.footwork}
          </div>
        </div>
        <div className="stat-title sub-heading">Switch Stance</div>
        <div className="stat content">
          <div
            className={red.switchStance > blue.switchStance ? "red" : undefined}
          >
            {red.switchStance}
          </div>
          <div
            className={
              blue.switchStance > red.switchStance ? "blue" : undefined
            }
          >
            {blue.switchStance}
          </div>
        </div>
        <div className="stat-title sub-heading">Takedown Def.</div>
        <div className="stat content">
          <div
            className={
              red.takedownDefence > blue.takedownDefence ? "red" : undefined
            }
          >
            {red.takedownDefence}
          </div>
          <div
            className={
              blue.takedownDefence > red.takedownDefence ? "blue" : undefined
            }
          >
            {blue.takedownDefence}
          </div>
        </div>
        <div className="stat-title sub-heading">Kick Power</div>
        <div className="stat content">
          <div className={red.kickPower > blue.kickPower ? "red" : undefined}>
            {red.kickPower}
          </div>
          <div className={blue.kickPower > red.kickPower ? "blue" : undefined}>
            {blue.kickPower}
          </div>
        </div>
        <div className="stat-title sub-heading">Kick Speed</div>
        <div className="stat content">
          <div className={red.kickSpeed > blue.kickSpeed ? "red" : undefined}>
            {red.kickSpeed}
          </div>
          <div className={blue.kickSpeed > red.kickSpeed ? "blue" : undefined}>
            {blue.kickSpeed}
          </div>
        </div>
      </div>
    </div>
  );
}
