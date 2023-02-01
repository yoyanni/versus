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
    <div className="health-info shadow">
      <div className="card-title heading-alt">
        <span>
          {red.health} ({redAverage})
        </span>
        <span className="heading">Health</span>
        <span>
          ({blueAverage}) {blue.health}
        </span>
      </div>
      <div className="stats">
        <div className="stat-title sub-heading">Cardio</div>
        <div className="stat content">
          <div className={red.cardio > blue.cardio ? "red" : undefined}>
            {red.cardio}
          </div>
          <div className={blue.cardio > red.cardio ? "blue" : undefined}>
            {blue.cardio}
          </div>
        </div>
        <div className="stat-title sub-heading">Chin</div>
        <div className="stat content">
          <div className={red.chin > blue.chin ? "red" : undefined}>
            {red.chin}
          </div>
          <div className={blue.chin > red.chin ? "blue" : undefined}>
            {blue.chin}
          </div>
        </div>
        <div className="stat-title sub-heading">Body</div>
        <div className="stat content">
          <div className={red.body > blue.body ? "red" : undefined}>
            {red.body}
          </div>
          <div className={blue.body > red.body ? "blue" : undefined}>
            {blue.body}
          </div>
        </div>
        <div className="stat-title sub-heading">Legs</div>
        <div className="stat content">
          <div className={red.legs > blue.legs ? "red" : undefined}>
            {red.legs}
          </div>
          <div className={blue.legs > red.legs ? "blue" : undefined}>
            {blue.legs}
          </div>
        </div>
        <div className="stat-title sub-heading">Recovery</div>
        <div className="stat content">
          <div className={red.recovery > blue.recovery ? "red" : undefined}>
            {red.recovery}
          </div>
          <div className={blue.recovery > red.recovery ? "blue" : undefined}>
            {blue.recovery}
          </div>
        </div>
      </div>
    </div>
  );
}
