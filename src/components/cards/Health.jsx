import "./Health.css";

export default function Health({ red, blue }) {
  const redAcc = Object.values(red).reduce((acc, cur, index) => {
    if (index == 0) return acc;
    return acc + cur;
  }, 0);
  const blueAcc = Object.values(blue).reduce((acc, cur, index) => {
    if (index == 0) return acc;
    return acc + cur;
  }, 0);
  const redAverage = Math.round((redAcc / 5) * 10) / 10;
  const blueAverage = Math.round((blueAcc / 5) * 10) / 10;

  return (
    <div className="health-info">
      <div className="title-card">
        <span className="red-health">
          {red.health} ({redAverage})
        </span>
        <span>Health</span>
        <span className="blue-health">
          ({blueAverage}) {blue.health}
        </span>
      </div>
      <div className="health">
        <div className="red-fighter-health">
          <div>
            <span>Cardio</span>
            <span>{red.cardio}</span>
          </div>
          <div>
            <span>Chin</span>
            <span>{red.chin}</span>
          </div>
          <div>
            <span>Body</span>
            <span>{red.body}</span>
          </div>
          <div>
            <span>Legs</span>
            <span>{red.legs}</span>
          </div>
          <div>
            <span>Recovery</span>
            <span>{red.recovery}</span>
          </div>
        </div>
        <div className="blue-fighter-health">
          <div>
            <span>{blue.cardio}</span>
            <span>Cardio</span>
          </div>
          <div>
            <span>{blue.chin}</span>
            <span>Chin</span>
          </div>
          <div>
            <span>{blue.body}</span>
            <span>Body</span>
          </div>
          <div>
            <span>{blue.legs}</span>
            <span>Legs</span>
          </div>
          <div>
            <span>{blue.recovery}</span>
            <span>Recovery</span>
          </div>
        </div>
      </div>
    </div>
  );
}
