import "./Perk.css";

export default function Perk({ red, blue }) {
  let redCount = 0;
  let blueCount = 0;
  const redPerks = red.map((perk, index) => {
    ++redCount;
    return (
      <div key={index} className={`tooltip ${perk[2].toLowerCase()}`}>
        <span className="tooltiptext-red">{perk[1]}</span>
        {perk[0]}
      </div>
    );
  });
  const bluePerks = blue.map((perk, index) => {
    ++blueCount;
    return (
      <div key={index} className={`tooltip ${perk[2].toLowerCase()}`}>
        <span className="tooltiptext-blue">{perk[1]}</span>
        {perk[0]}
      </div>
    );
  });

  return (
    <div className="perk-info shadow">
      <div className="card-title heading-alt border-bottom">
        <span>{redCount}</span>
        <span className="heading">Perks</span>
        <span>{blueCount}</span>
      </div>
      <div className="perks content">
        <div className="red-perks">{redPerks}</div>
        <div className="blue-perks">{bluePerks}</div>
      </div>
    </div>
  );
}
