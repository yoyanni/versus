import { Link, useParams, useNavigate } from "react-router-dom";

import ReadOne from "../components/CRUD/ReadOne.jsx";
import Error from "./error.jsx";

export default function fighter({ fighters, setFighters }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const fighter = fighters.find((f) => f._id === Number(id));

  if (!fighter) return <Error />;

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

  return <ReadOne fighter={fighter} handleDelete={handleDelete} />;
}
