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
    <div className="grappling-info">
      <div className="title-card">
        <span className="red-grappling">
          {red.grappling} ({redAverage})
        </span>
        <span>Grappling</span>
        <span className="blue-grappling">
          ({blueAverage}) {blue.grappling}
        </span>
      </div>
      <div className="grappling">
        <div className="red-fighter-grappling">
          <div>
            <span>Takedowns</span>
            <span>{red.takedowns}</span>
          </div>
          <div>
            <span>Top Control</span>
            <span>{red.topControl}</span>
          </div>
          <div>
            <span>Bottom Control</span>
            <span>{red.bottomControl}</span>
          </div>
          <div>
            <span>Submission</span>
            <span>{red.submission}</span>
          </div>
          <div>
            <span>Submission Def.</span>
            <span>{red.submissionDefence}</span>
          </div>
          <div>
            <span>Ground Striking</span>
            <span>{red.groundStriking}</span>
          </div>
          <div>
            <span>Clinch Striking</span>
            <span>{red.clinchStriking}</span>
          </div>
          <div>
            <span>Clinch Control</span>
            <span>{red.clinchControl}</span>
          </div>
        </div>
        <div className="blue-fighter-grappling">
          <div>
            <span>{blue.takedowns}</span>
            <span>Takedowns</span>
          </div>
          <div>
            <span>{blue.topControl}</span>
            <span>Top Control</span>
          </div>
          <div>
            <span>{blue.bottomControl}</span>
            <span>Bottom Control</span>
          </div>
          <div>
            <span>{blue.submission}</span>
            <span>Submission</span>
          </div>
          <div>
            <span>{blue.submissionDefence}</span>
            <span>Submission Def.</span>
          </div>
          <div>
            <span>{blue.groundStriking}</span>
            <span>Ground Striking</span>
          </div>
          <div>
            <span>{blue.clinchStriking}</span>
            <span>Clinch Striking</span>
          </div>
          <div>
            <span>{blue.clinchControl}</span>
            <span>Clinch Control</span>
          </div>
        </div>
      </div>
    </div>
  );
}
