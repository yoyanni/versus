import "./Health.css";

export default function Health() {
  return (
    <div className="health-info">
      <div className="title-card">
        <span className="red-health">4.5 (91.6)</span>
        <span>Health</span>
        <span className="blue-health">(93.2) 4.5</span>
      </div>
      <div className="health">
        <div className="red-fighter-health">
          <div>
            <span>Cardio</span>
            <span>90</span>
          </div>
          <div>
            <span>Chin</span>
            <span>93</span>
          </div>
          <div>
            <span>Body</span>
            <span>93</span>
          </div>
          <div>
            <span>Legs</span>
            <span>90</span>
          </div>
          <div>
            <span>Recovery</span>
            <span>92</span>
          </div>
        </div>
        <div className="blue-fighter-health">
          <div>
            <span>Cardio</span>
            <span>94</span>
          </div>
          <div>
            <span>Chin</span>
            <span>93</span>
          </div>
          <div>
            <span>Body</span>
            <span>93</span>
          </div>
          <div>
            <span>Legs</span>
            <span>92</span>
          </div>
          <div>
            <span>Recovery</span>
            <span>94</span>
          </div>
        </div>
      </div>
    </div>
  );
}
