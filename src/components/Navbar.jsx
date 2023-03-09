import { useState, useEffect } from "react";

import menu from "../assets/menu-white.png";
import "./Navbar.css";

export default function Navbar() {
  // const standard = new Date(2021, 4, 26);
  const nowSec = Math.floor(new Date().getTime() / 1000);
  const nowMin = Math.floor(nowSec / 60);
  const nowHr = Math.floor(nowMin / 60);

  const baseSec = Math.floor(new Date(2023, 1, 1, 23).getTime() / 1000);
  const baseMin = Math.floor(baseSec / 60);
  const baseHr = Math.floor(baseMin / 60);

  const sec = 59 - ((nowSec - baseSec) % 60);
  const min = 59 - ((nowMin - baseMin) % 60);
  const hr = (nowHr - baseHr) % 5;

  const weightclass = [
    ["Welterweight", "Middleweight"],
    ["Light Heavyweight", "Heavyweight"],
    ["Featherweight", "Lightweight"],
    ["Strawweight (W)", "Flyweight (W)", "Bantamweight (W)"],
    ["Flyweight", "Bantamweight"],
  ];
  
  //These need to be kept in state
  const [timer, setTimer] = useState({
    minutes: min,
    seconds: sec,
  });
  const [id, setId] = useState(hr);

  //to set an interval every second useEffect was used.
  useEffect(() => {
    const interval = setInterval(
      () => setTimer({ minutes: min, seconds: sec }),
      1000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="shadow">
      <div className="top-nav bg-container">
        <span className="title">Versus</span>
        <img className="menu-img" src={menu} />
      </div>
      <div className="bot-nav bg-elevated sub-title">
        <span>
          {`${weightclass[hr][0]}, ${weightclass[hr][1]}`}
          {weightclass[hr][2] && `, ${weightclass[hr][2]}`}
        </span>
        <span>{`${min < 10 ? "0" : ""}${min}:${
          sec < 10 ? "0" : ""
        }${sec}`}</span>
      </div>
    </nav>
  );
}
