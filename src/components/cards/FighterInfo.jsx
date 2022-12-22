import "./FighterInfo.css";

export default function FighterInfo() {
  return (
    <div className="fighter-info">
      <div className="title-card">Fighter Info</div>
      <div className="info">
        <div className="red-fighter-info">
          <div>
            <span>Kickboxer</span>
            <span>4</span>
          </div>
          <div>
            <span>Stance</span>
            <span>Southpaw</span>
          </div>
          <div>
            <span>Reach</span>
            <span>188</span>
          </div>
        </div>
        <div className="blue-fighter-info">
          <div>
            <span>4.5</span>
            <span>Kickboxer</span>
          </div>
          <div>
            <span>Southpaw</span>
            <span>Stance</span>
          </div>
          <div>
            <span>183</span>
            <span>Reach</span>
          </div>
        </div>
      </div>
    </div>
  );
}
