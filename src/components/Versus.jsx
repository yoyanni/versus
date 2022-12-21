import dropdown from "../assets/dropdown-white.png";
import "./Versus.css";

export default function Versus() {
  return (
    <div className="versus">
      <div className="weightclass-container">
        <span className="weight">LIGHTWEIGHT</span>
        <img src={dropdown} />
      </div>
      <div className="fighter-container">
        <div className="fighter-select">
          <span className="red-fighter">MCGREGOR</span>
          <img src={dropdown} />
        </div>
        <span className="vs">VS</span>
        <div className="fighter-select">
          <span className="blue-fighter">POIRIER</span>
          <img src={dropdown} />
        </div>
      </div>
    </div>
  );
}
