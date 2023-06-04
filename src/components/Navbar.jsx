import { useState, useEffect } from "react";

import "./Navbar.css";

const weightclass = [
  ["Featherweight", "Lightweight"],
  ["Strawweight (W)", "Flyweight (W)", "Bantamweight (W)"],
  ["Flyweight", "Bantamweight"],
  ["Welterweight", "Middleweight"],
  ["Light Heavyweight", "Heavyweight"],
];

const then = new Date(2023, 5, 1, 11);

function timeLeftCalc() {
  const now = new Date().getTime();
  return now - then;
}

export default function Navbar() {
  const [timeLeft, setTimeLeft] = useState(timeLeftCalc());

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(timeLeftCalc()), 1000);
    return () => clearInterval(interval);
  }, []);

  const sec = 59 - (Math.floor(timeLeft / 1000) % 60);
  const min = 59 - (Math.floor(timeLeft / 60000) % 60);
  const hr = Math.floor(timeLeft / 3600000) % 5;

  return (
    <nav className="nav">
      <div className="nav__top">
        <span className="nav__top__title">Versus</span>
      </div>
      <div className="nav__bot">
        <span className="nav__bot__weight">{weightclass[hr].join(", ")}</span>
        <span className="nav__bot__timer">
          {(min < 10 && "0") + min}:{(sec < 10 && "0") + sec}
        </span>
      </div>
    </nav>
  );
}
