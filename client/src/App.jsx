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

  useEffect(() => {
    function fetchData() {
      return fetch("http://192.168.1.53:5000/fighters")
        .then((res) => res.json())
        .then((data) => setFighters(data))
        .catch((err) => console.log(err));
    }
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      {/* temp links */}
      <Link to="/">Home</Link> <Link to="/fighters">Fighter List</Link>
      <Routes>
        <Route path="/" element={<Home fighters={fighters} />} />
        <Route path="/fighters" element={<Fighters fighters={fighters} />} />
        <Route path="/fighters/:id" element={<Fighter fighters={fighters} />} />
        <Route
          path="/fighters/create"
          element={<Form setFighters={setFighters} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
