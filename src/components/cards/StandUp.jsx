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
    <div className="standup-info">
      <div className="title-card">
        <span className="red-standup">
          {red.standUp} ({redAverage})
        </span>
        <span>Stand-Up</span>
        <span className="blue-standup">
          ({blueAverage}) {blue.standUp}
        </span>
      </div>
      <div className="standup">
        <div className="red-fighter-standup">
          <div>
            <span>Punch Speed</span>
            <span>{red.punchSpeed}</span>
          </div>
          <div>
            <span>Punch Power</span>
            <span>{red.punchPower}</span>
          </div>
          <div>
            <span>Accuracy</span>
            <span>{red.accuracy}</span>
          </div>
          <div>
            <span>Blocking</span>
            <span>{red.blocking}</span>
          </div>
          <div>
            <span>Head Movement</span>
            <span>{red.headMovement}</span>
          </div>
          <div>
            <span>Footwork</span>
            <span>{red.footwork}</span>
          </div>
          <div>
            <span>Switch Stance</span>
            <span>{red.switchStance}</span>
          </div>
          <div>
            <span>Takedown Def.</span>
            <span>{red.takedownDefence}</span>
          </div>
          <div>
            <span>Kick Power</span>
            <span>{red.kickPower}</span>
          </div>
          <div>
            <span>Kick Speed</span>
            <span>{red.kickSpeed}</span>
          </div>
        </div>
        <div className="blue-fighter-standup">
          <div>
            <span>{blue.punchSpeed}</span>
            <span>Punch Speed</span>
          </div>
          <div>
            <span>{blue.punchPower}</span>
            <span>Punch Power</span>
          </div>
          <div>
            <span>{blue.accuracy}</span>
            <span>Accuracy</span>
          </div>
          <div>
            <span>{blue.blocking}</span>
            <span>Blocking</span>
          </div>
          <div>
            <span>{blue.headMovement}</span>
            <span>Head Movement</span>
          </div>
          <div>
            <span>{blue.footwork}</span>
            <span>Footwork</span>
          </div>
          <div>
            <span>{blue.switchStance}</span>
            <span>Switch Stance</span>
          </div>
          <div>
            <span>{blue.takedownDefence}</span>
            <span>Takedown Def.</span>
          </div>
          <div>
            <span>{blue.kickPower}</span>
            <span>Kick Power</span>
          </div>
          <div>
            <span>{blue.kickSpeed}</span>
            <span>Kick Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
