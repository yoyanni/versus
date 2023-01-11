import "./Perk.css";

export default function Perk({ red, blue }) {
  let redCount = 0;
  let blueCount = 0;
  const redPerks = red.map((perk, index) => {
    ++redCount;
    return <span key={index}>{perk}</span>;
  });
  const bluePerks = blue.map((perk, index) => {
    ++blueCount;
    return <span key={index}>{perk}</span>;
  });

  return (
    <div className="perk-info">
      <div className="title-card">
        <span className="red-perks">{redCount}</span>
        <span>Perks</span>
        <span className="blue-perks">{blueCount}</span>
      </div>
      <div className="perks">
        <div className="red-fighter-perks">{redPerks}</div>
        <div className="blue-fighter-perks">{bluePerks}</div>
      </div>
    </div>
  );
}
