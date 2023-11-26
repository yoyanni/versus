import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import standard from "../standardInfo.js";

export default function fighter({ fighters, setFighters }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const fighter = fighters.find((f) => f._id === Number(id));

  if (!fighter) return <NotFound />;

  const movesJSX = standard.moveKeys.map((key, index) => {
    let innerJSX;
    const title = key[0].toUpperCase() + key.slice(1);
    if (standard.groundKeys.includes(key)) {
      innerJSX = fighter.moves.ground[key].map((move, index) => {
        return (
          <div key={index}>
            {move.name}: {move.level}
          </div>
        );
      });

      return (
        <div key={index}>
          <strong>{title}</strong>
          {innerJSX}
        </div>
      );
    } else {
      innerJSX = fighter.moves[key].map((move, index) => {
        return (
          <div key={index}>
            {move.name}: {move.level}
          </div>
        );
      });
      return (
        <div key={index}>
          <strong>{title}</strong>
          {innerJSX}
        </div>
      );
    }
  });

  function handleDelete(id) {
    if (confirm("Please confirm if you want to delete this record?")) {
      const url = `http://192.168.1.9:5000/api/fighters/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          setFighters(data);
          alert("Record deleted.");
          navigate("/fighters", { replace: true });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }

  return (
    <>
      <h2>
        {fighter.firstName +
          (fighter.nickname ? ` '${fighter.nickname}' ` : " ") +
          fighter.lastName}
      </h2>
      <Link to="/fighters">Back</Link>{" "}
      <Link to={`/fighters/${fighter._id}/update`}>Edit</Link>
      <button onClick={() => handleDelete(fighter._id)}>Delete</button>
      <div>
        <div>
          <strong>Weight Class: </strong> {fighter.weightClass}
        </div>
        <div>
          <strong>Rank: </strong>
          {fighter.rank ? `${fighter.rank}` : "Not Ranked"}
        </div>
      </div>
      {movesJSX}
    </>
  );
}

function NotFound() {
  return (
    <>
      <div>
        <Link to="/fighters">Back</Link>
      </div>
      <div>Fighter not found, please try again.</div>
    </>
  );
}
