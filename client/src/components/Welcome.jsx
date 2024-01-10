import { Link } from "react-router-dom";

import "./Welcome.css";

export default function Home() {
  return (
    <div className="welcome">
      <div>
        <h1>Welcome to Versus</h1>
        <p>
          Here you can select fighters and compare stats for EA Sports UFC 4.
        </p>
      </div>
      <img className="welcome__img" src="" alt="Placeholder" />
      <div className="welcome__links">
        <Link className="welcome__links__versus" to="/versus">
          go to Versus
        </Link>
        <div className="welcome__links__tour">
          <span>or </span>
          <Link
            className="welcome__links__tour__link"
            to="/versus"
            state={true}
          >
            take the tour
          </Link>
        </div>
      </div>
    </div>
  );
}
