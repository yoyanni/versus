import "./StandUp.css";

export default function StandUp() {
  return (
    <div className="standup-info">
      <div className="title-card">
        <span className="red-standup">5 (93.7)</span>
        <span>Stand-Up</span>
        <span className="blue-standup">(92.8) 5</span>
      </div>
      <div className="standup">
        <div className="red-fighter-standup">
          <div>
            <span>Punch Speed</span>
            <span>97</span>
          </div>
          <div>
            <span>Punch Power</span>
            <span>96</span>
          </div>
          <div>
            <span>Accuracy</span>
            <span>99</span>
          </div>
          <div>
            <span>Blocking</span>
            <span>92</span>
          </div>
          <div>
            <span>Head Movement</span>
            <span>95</span>
          </div>
          <div>
            <span>Footwork</span>
            <span>97</span>
          </div>
          <div>
            <span>Switch Stance</span>
            <span>87</span>
          </div>
          <div>
            <span>Takedown Def.</span>
            <span>91</span>
          </div>
          <div>
            <span>Kick Power</span>
            <span>91</span>
          </div>
          <div>
            <span>Kick Speed</span>
            <span>92</span>
          </div>
        </div>
        <div className="blue-fighter-standup">
          <div>
            <span>96</span>
            <span>Punch Speed</span>
          </div>
          <div>
            <span>95</span>
            <span>Punch Power</span>
          </div>
          <div>
            <span>97</span>
            <span>Accuracy</span>
          </div>
          <div>
            <span>93</span>
            <span>Blocking</span>
          </div>
          <div>
            <span>94</span>
            <span>Head Movement</span>
          </div>
          <div>
            <span>94</span>
            <span>Footwork</span>
          </div>
          <div>
            <span>90</span>
            <span>Switch Stance</span>
          </div>
          <div>
            <span>89</span>
            <span>Takedown Def.</span>
          </div>
          <div>
            <span>90</span>
            <span>Kick Power</span>
          </div>
          <div>
            <span>90</span>
            <span>Kick Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
