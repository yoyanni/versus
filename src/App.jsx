import React from "react";
import Navbar from "./components/Navbar";
import Versebar from "./components/Versebar";
import Card from "./components/Card";

import data from "./data.js";

import "./App.css";

function App() {
  // seems like both states will reside in the App component because both are needed here
  const [fighter, setFighter] = React.useState([]);
  const [weightClass, setWeightClass] = React.useState("Lightweight");

  const filteredFighters = data.filter(
    (fighter) => fighter.weightClass == weightClass
  );

  //function to set fighters and then feed it to component
  return (
    <div className="app">
      <Navbar />
      <Card />
      <Versebar weight={weightClass} list={filteredFighters} />
    </div>
  );
}

export default App;
