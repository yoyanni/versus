import { Link } from "react-router-dom";

import "./AccordionItem.css";

export default function AccordionItem({
  data,
  nestLevel = "one",
  children,
  handleMoveRemoval,
}) {
  if (data) {
    return (
      <Link to={`/fighters/${data._id}`} className="items__item">
        <div className={`items__item__name nested-${nestLevel}`}>
          {data.firstName + " " + data.lastName}
        </div>
      </Link>
    );
  } else {
    return (
      <div className={`items__${handleMoveRemoval ? "flex-" : ""}item`}>
        <div
          className={`items__${
            handleMoveRemoval ? "flex-" : ""
          }item__move nested-${nestLevel}`}
        >
          {children}
        </div>
        {handleMoveRemoval && (
          <button
            onClick={handleMoveRemoval}
            className={`items__${handleMoveRemoval ? "flex-" : ""}item__delete`}
          >
            Delete
          </button>
        )}
      </div>
    );
  }
}
