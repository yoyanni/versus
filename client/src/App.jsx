import { Routes, Route, Link } from "react-router-dom";

import Home from "./routes/home";
import Error from "./routes/error";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      {/* temp links */}
      <Link to="/">Home</Link>
      <Link to="/create">Create</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Form />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
