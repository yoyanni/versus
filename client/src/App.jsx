import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./routes/home";
import Fighters from "./routes/fighters";
import Fighter from "./routes/fighter";
import Error from "./routes/error";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

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
      {/* temp links */}
      <Link to="/">Home</Link> <Link to="/fighters">Fighter List</Link>
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
              <Form fighters={fighters} setFighters={setFighters} />
            ) : (
              <Loading />
            )
          }
        />
        <Route
          path="/fighters/create"
          element={<Form setFighters={setFighters} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

function Loading() {
  return <div>Loading...</div>;
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
