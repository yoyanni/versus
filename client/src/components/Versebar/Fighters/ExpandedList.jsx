import { CSSTransition } from "react-transition-group";
import { useRef, useState } from "react";

import "./ExpandedList.css";

export default function ExpandedList({
  side,
  listShown,
  weightFighters,
  handleFighterChange,
}) {
  const [isRankedOnly, setIsRankedOnly] = useState(false);
  const ref = useRef(null);

  // JSX for Fighters
  const fighterList = weightFighters.map((fighter) => {
    let rank;
    if (fighter.rank === "null") rank = "NR";
    else if (fighter.rank === "0") rank = "Champ";
    else rank = `#${fighter.rank}`;

    // This probably can be done better but might need to tweak data type
    // typeof fighter.rank === "string" but eg. "0", "1", "null"
    if (isRankedOnly) {
      if (isNaN(+fighter.rank)) return;
    }

    return (
      <div
        key={fighter._id}
        onClick={() => handleFighterChange(fighter._id, listShown)}
        className={`versus__${side}-list__grid__body__fighter`}
      >
        <div>{rank}</div>
        <div className={`versus__${side}-list__grid__body__fighter__name`}>
          <div>
            <div
              className={`versus__${side}-list__grid__body__fighter__name__first`}
            >
              {fighter.firstName.toUpperCase()}
            </div>
            <div
              className={`versus__${side}-list__grid__body__fighter__name__last`}
            >
              {fighter.lastName.toUpperCase()}
            </div>
          </div>
        </div>
        <div>{fighter.basic.level}</div>
      </div>
    );
  });

  return (
    <CSSTransition
      in={listShown === side}
      mountOnEnter
      timeout={0}
      classNames={`${side}-list`}
      nodeRef={ref}
    >
      <div ref={ref} className={`versus__${side}-list`}>
        <div className={`versus__${side}-list__filter`}>
          <label>
            <input
              type="checkbox"
              checked={isRankedOnly}
              className={`versus__${side}-list__filter__input`}
              onChange={() => setIsRankedOnly(!isRankedOnly)}
            />
            Ranked Only
          </label>
        </div>
        <div className={`versus__${side}-list__grid`}>
          <div className={`versus__${side}-list__grid__heading`}>
            <div>Rank</div>
            <div>Name</div>
            <div>Level</div>
          </div>
          <div className={`versus__${side}-list__grid__body`}>
            {fighterList}
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}
