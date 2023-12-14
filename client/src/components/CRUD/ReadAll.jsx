import { Link } from "react-router-dom";
import { useState } from "react";

import AccordionItem from "../Accordion/AccordionItem";
import standard from "../../standardInfo";
import Accordion from "../Accordion";
import "./ReadAll.css";

const allWC = [...standard.weightClasses, "Generic"];

export default function ReadAll({ fighters }) {
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Handles the active accordion
  function handleClick(id) {
    if (id === activeAccordion) setActiveAccordion(null);
    else setActiveAccordion(id);
  }

  // JSX for all weightclasses with their fighters
  const allFighters = allWC.map((wc) => {
    const filteredFighters = fighters.filter((f) => f.weightClass === wc);

    return (
      <Accordion
        key={wc}
        title={wc}
        handleClick={handleClick}
        activeAccordion={activeAccordion}
      >
        {filteredFighters.map((fighter) => (
          <AccordionItem key={fighter._id} data={fighter} />
        ))}
      </Accordion>
    );
  });

  return (
    <div className="fighters">
      <h1 className="fighters__heading">All Fighters</h1>
      <p className="fighters__body">
        Here, you will find all the fighters per weightclass. You can then click
        the fighter to view their stats but also all their moves and the levels.
      </p>
      <div className="fighters__container">{allFighters}</div>
      <Link to="/fighters/create" className="fighters__create-link">
        Create new Fighter
      </Link>
    </div>
  );
}
