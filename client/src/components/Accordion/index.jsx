import { useState } from "react";

import "./index.css";

export default function Accordion({
  children, // JSX for nesting but also the flag for nesting
  nestLevel = "", // indicator of depth level to determine padding
  title, // to compare with state (activeAccordion)
  activeAccordion, // state
  handleClick, // for changing the shared state
  hasOwnState = false,
}) {
  const [active, setActive] = useState(false);
  return (
    <>
      <div
        className={`accordion${nestLevel && " nested-" + nestLevel}`}
        onClick={
          hasOwnState ? () => setActive(!active) : () => handleClick(title)
        }
      >
        <div>{title}</div>
        {hasOwnState ? (
          active ? (
            <div>-</div>
          ) : (
            <div>+</div>
          )
        ) : activeAccordion === title ? (
          <div>-</div>
        ) : (
          <div>+</div>
        )}
      </div>
      {hasOwnState
        ? active && <div className="accordion-items">{children}</div>
        : activeAccordion === title && (
            <div className="accordion-items">{children}</div>
          )}
    </>
  );
}
