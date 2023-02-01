import menu from "../assets/menu-white.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="shadow">
      <div className="top-nav bg-container">
        <span className="title">Versus</span>
        <img className="menu-img" src={menu} />
      </div>
      <div className="bot-nav bg-elevated sub-title">
        <span>Featherweight, Lightweight</span>
        <span>59:99</span>
      </div>
    </nav>
  );
}
