import { useState, useEffect } from "react";
import Versebar from "../components/Versebar";
import Cards from "../components/Cards";
import standard from "../standardInfo.js";

// Eventually will be driven by user preference
const initialState = {
  weightClass: 0,
  red: standard.defaultFighters[0].red,
  blue: standard.defaultFighters[0].blue,
};

export default function Home() {
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
    weightClass: standard.weightClasses[selectedIds.weightClass],
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
      red: standard.defaultFighters[id].red,
      blue: standard.defaultFighters[id].blue,
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
    fighters.length !== 0 && (
      <>
        <Cards red={selectedData.red} blue={selectedData.blue} />
        <Versebar
          weightFighters={weightFighters}
          selectedData={selectedData}
          changeWeight={changeWeight}
          changeFighters={changeFighters}
        />
      </>
    )
  );
}
