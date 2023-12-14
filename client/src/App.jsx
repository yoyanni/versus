import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Fighters from "./routes/fighters";
import Fighter from "./routes/fighter";
import Create from "./routes/create";
import Update from "./routes/update";
import Error from "./routes/error";
import Home from "./routes/home";
import "./App.css";

export default function App() {
  const [fighters, setFighters] = useState([]);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    function fetchData() {
      return fetch("http://192.168.1.9:5000/api/fighters")
        .then((res) => res.json())
        .then((data) => setFighters(data))
        .catch((err) => console.log(err));
    }

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    fetchData();

    // Detach the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (windowSize.width > 400) return <Warning />;

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={fighters.length ? <Home fighters={fighters} /> : <Loading />}
        />
        <Route
          path="/fighters"
          element={
            fighters.length ? <Fighters fighters={fighters} /> : <Loading />
          }
        />
        <Route
          path="/fighters/create"
          element={<Create setFighters={setFighters} />}
        />
        <Route
          path="/fighters/:id"
          element={
            fighters.length ? (
              <Fighter fighters={fighters} setFighters={setFighters} />
            ) : (
              <Loading />
            )
          }
        />
        <Route
          path="/fighters/:id/update"
          element={
            fighters.length ? (
              <Update fighters={fighters} setFighters={setFighters} />
            ) : (
              <Loading />
            )
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

function Warning() {
  return (
    <>
      <div className="designWarning">
        <div className="designWarningHeading">
          &#128679; Under development. &#128679;
        </div>
        <div className="designWarningSubHeading">
          Please use the site via a smartphone, for now...
        </div>
        <div className="designWarningText">Sowwy</div>
      </div>
    </>
  );
}
