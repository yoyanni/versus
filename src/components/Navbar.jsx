import menu from "../assets/menu-white.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="top-nav">
        <span className="title">Versus</span>
        <img className="menu-img" src={menu} />
      </div>
      <div className="bot-nav">
        <span className="weightclass">Featherweight, Lightweight</span>
        <span className="time-left">59:99</span>
      </div>
    </nav>
  );
}
