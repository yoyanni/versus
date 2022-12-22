import "./Perk.css";

export default function Perk() {
  return (
    <div className="perk-info">
      <div className="title-card">
        <span className="red-perks">5</span>
        <span>Perks</span>
        <span className="blue-perks">5</span>
      </div>
      <div className="perks">
        <div className="red-fighter-perks">
          <span>Laser Focus</span>
          <span>Fast Hands</span>
          <span>Frontal Assault</span>
          <span>Pay To Miss</span>
          <span>Predator</span>
        </div>
        <div className="blue-fighter-perks">
          <span>Laser Focus</span>
          <span>Fast Hands</span>
          <span>Weathering Storms</span>
          <span>Predator</span>
          <span>Recharger</span>
        </div>
      </div>
    </div>
  );
}
