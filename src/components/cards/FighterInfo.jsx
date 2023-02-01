import "./FighterInfo.css";

export default function FighterInfo({ red, blue }) {
  return (
    <div className="fighter-info shadow">
      <div className="card-title heading">Fighter Info</div>
      <div className="stats">
        <div className="stat-title sub-heading">Martial Arts</div>
        <div className="stat content">
          <div className={red.rating > blue.rating ? "red" : undefined}>
            <span>{red.martialArts}</span>
            <span>{red.rating}</span>
          </div>
          <div className={blue.rating > red.rating ? "blue" : undefined}>
            <span>{blue.rating}</span>
            <span>{blue.martialArts}</span>
          </div>
        </div>
        <div className="stat-title sub-heading">Stance</div>
        <div className="stat content">
          <div className={red.stance > blue.stance ? "red" : undefined}>
            <span>{red.stance}</span>
          </div>
          <div className={blue.stance > red.stance ? "blue" : undefined}>
            <span>{blue.stance}</span>
          </div>
        </div>
        <div className="stat-title sub-heading">Reach</div>
        <div className="stat content">
          <div className={red.reach > blue.reach ? "red" : undefined}>
            <span>{red.reach}</span>
          </div>
          <div className={blue.reach > red.reach ? "blue" : undefined}>
            <span>{blue.reach}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
