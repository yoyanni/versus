import "./Grappling.css";

export default function Grappling({ red, blue }) {
  const redAcc = Object.values(red).reduce((acc, cur, index) => {
    if (index == 0) return acc;
    return acc + cur;
  }, 0);
  const blueAcc = Object.values(blue).reduce((acc, cur, index) => {
    if (index == 0) return acc;
    return acc + cur;
  }, 0);
  const redAverage = Math.round((redAcc / 8) * 10) / 10;
  const blueAverage = Math.round((blueAcc / 8) * 10) / 10;

  return (
    <div className="grappling-info shadow">
      <div className="card-title heading-alt">
        <span>
          {red.grappling} ({redAverage})
        </span>
        <span className="heading">Grappling</span>
        <span>
          ({blueAverage}) {blue.grappling}
        </span>
      </div>
      <div className="stats">
        <div className="stat-title sub-heading">Takedowns</div>
        <div className="stat content">
          <div className={red.takedowns > blue.takedowns ? "red" : undefined}>
            {red.takedowns}
          </div>
          <div className={blue.takedowns > red.takedowns ? "blue" : undefined}>
            {blue.takedowns}
          </div>
        </div>
        <div className="stat-title sub-heading">Top Control</div>
        <div className="stat content">
          <div className={red.topControl > blue.topControl ? "red" : undefined}>
            {red.topControl}
          </div>
          <div
            className={blue.topControl > red.topControl ? "blue" : undefined}
          >
            {blue.topControl}
          </div>
        </div>
        <div className="stat-title sub-heading">Bottom Control</div>
        <div className="stat content">
          <div
            className={
              red.bottomControl > blue.bottomControl ? "red" : undefined
            }
          >
            {red.bottomControl}
          </div>
          <div
            className={
              blue.bottomControl > red.bottomControl ? "blue" : undefined
            }
          >
            {blue.bottomControl}
          </div>
        </div>
        <div className="stat-title sub-heading">Submission</div>
        <div className="stat content">
          <div className={red.submission > blue.submission ? "red" : undefined}>
            {red.submission}
          </div>
          <div
            className={blue.submission > red.submission ? "blue" : undefined}
          >
            {blue.submission}
          </div>
        </div>
        <div className="stat-title sub-heading">Submission Def.</div>
        <div className="stat content">
          <div
            className={
              red.submissionDefence > blue.submissionDefence ? "red" : undefined
            }
          >
            {red.submissionDefence}
          </div>
          <div
            className={
              blue.submissionDefence > red.submissionDefence
                ? "blue"
                : undefined
            }
          >
            {blue.submissionDefence}
          </div>
        </div>
        <div className="stat-title sub-heading">Ground Striking</div>
        <div className="stat content">
          <div
            className={
              red.groundStriking > blue.groundStriking ? "red" : undefined
            }
          >
            {red.groundStriking}
          </div>
          <div
            className={
              blue.groundStriking > red.groundStriking ? "blue" : undefined
            }
          >
            {blue.groundStriking}
          </div>
        </div>
        <div className="stat-title sub-heading">Clinch Striking</div>
        <div className="stat content">
          <div
            className={
              red.clinchStriking > blue.clinchStriking ? "red" : undefined
            }
          >
            {red.clinchStriking}
          </div>
          <div
            className={
              blue.clinchStriking > red.clinchStriking ? "blue" : undefined
            }
          >
            {blue.clinchStriking}
          </div>
        </div>
        <div className="stat-title sub-heading">Clinch Control</div>
        <div className="stat content">
          <div
            className={
              red.clinchControl > blue.clinchControl ? "red" : undefined
            }
          >
            {red.clinchControl}
          </div>
          <div
            className={
              blue.clinchControl > red.clinchControl ? "blue" : undefined
            }
          >
            {blue.clinchControl}
          </div>
        </div>
      </div>
    </div>
  );
}
