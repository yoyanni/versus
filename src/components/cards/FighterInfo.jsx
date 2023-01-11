import "./FighterInfo.css";

export default function FighterInfo({ red, blue }) {
  return (
    <div className="fighter-info">
      <div className="title-card">Fighter Info</div>
      <div className="info">
        <div className="red-fighter-info">
          <div>
            <span>{red.martialArts}</span>
            <span>{red.rating}</span>
          </div>
          <div>
            <span>Stance</span>
            <span>{red.stance}</span>
          </div>
          <div>
            <span>Reach</span>
            <span>{red.reach}</span>
          </div>
        </div>
        <div className="blue-fighter-info">
          <div>
            <span>{blue.rating}</span>
            <span>{blue.martialArts}</span>
          </div>
          <div>
            <span>{blue.stance}</span>
            <span>Stance</span>
          </div>
          <div>
            <span>{blue.reach}</span>
            <span>Reach</span>
          </div>
        </div>
      </div>
    </div>
  );
}
