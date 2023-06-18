import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Versebar from "./components/Versebar";
import Cards from "./components/Cards";

import "./App.css";

const weightClasses = [
  "Strawweight",
  "Flyweight (W)",
  "Bantamweight (W)",
  "Flyweight",
  "Bantamweight",
  "Featherweight",
  "Lightweight",
  "Welterweight",
  "Middleweight",
  "Light Heavyweight",
  "Heavyweight",
];

const defaultFighters = [
  { red: 10, blue: 14 },
  { red: 37, blue: 32 },
  { red: 55, blue: 60 },
  { red: 71, blue: 74 },
  { red: 85, blue: 87 },
  { red: 133, blue: 111 },
  { red: 189, blue: 180 },
  { red: 245, blue: 227 },
  { red: 295, blue: 255 },
  { red: 312, blue: 305 },
  { red: 360, blue: 350 },
];

// const initialState = { weightClass: 5, red: 133, blue: 111 };
const initialState = { weightClass: 0, red: 1, blue: 3 };

export default function App() {
  const [selectedIds, setSelectedIds] = useState(initialState);
  const [fighters, setFighters] = useState([]);

  useEffect(() => {
    function fetchData() {
      return fetch("http://192.168.1.53:5000/fighters")
        .then((res) => res.json())
        .then((data) => setFighters(data))
        .catch((err) => console.log(err));
    }
    fetchData();
  }, []);

  const selectedData = {
    weightClass: weightClasses[selectedIds.weightClass],
    red: fighters.find((fighter) => fighter._id == selectedIds.red),
    blue: fighters.find((fighter) => fighter._id == selectedIds.blue),
  };

  // Looks up Fighters filtered by weightClass State
  const weightFighters = fighters.filter((fighter) => {
    return (
      fighter.weightClass == selectedData.weightClass ||
      fighter.weightClass == "Generic"
    );
  });

  // Changes the weightClass State
  function changeWeight(id) {
    if (selectedIds.weightClass === id) return;
    setSelectedIds({
      weightClass: id,
      red: defaultFighters[id].red,
      blue: defaultFighters[id].blue,
    });
  }

  // Changes the fighters State
  function changeFighters(id, side) {
    console.log(id);
    console.log(side);
    if (selectedIds[side] === id) return;
    setSelectedIds((prevState) => ({ ...prevState, [side]: id }));
  }

  return (
    <>
      <Navbar />
      <Form />
      {/* {fighters.length !== 0 && (
        <>
          <Cards red={selectedData.red} blue={selectedData.blue} />
          <Versebar
            weightClasses={weightClasses}
            weightFighters={weightFighters}
            selectedData={selectedData}
            changeWeight={changeWeight}
            changeFighters={changeFighters}
          />
        </>
      )} */}
    </>
  );
}
