import { CSSTransition } from "react-transition-group";
import { useRef } from "react";

import dropdownImg from "../../../assets/dropdown-white.png";
import standard from "../../../standardInfo.js";
import "./index.css";

export default function WeightClass({
  listShown,
  selectedData,
  toggleList,
  handleWeightChange,
}) {
  // Refs for CSSTransition
  const pickupRef = useRef(null);
  const arrowRef = useRef(null);

  // Print list of Weight Classes
  const weightClassList = standard.weightClasses.map((weight, index) => {
    return (
      <div key={weight} onClick={() => handleWeightChange(index)}>
        {weight.toUpperCase()}
      </div>
    );
  });

  return (
    <div
      className="versus__weightclass"
      onClick={() => toggleList("weightClass")}
    >
      <CSSTransition
        in={listShown === "weightClass"}
        mountOnEnter
        timeout={0}
        classNames="pickup"
        nodeRef={pickupRef}
      >
        <div ref={pickupRef} className="versus__weightclass__pickup">
          {weightClassList}
        </div>
      </CSSTransition>
      <div className="versus__weightclass__selected">
        <CSSTransition
          in={listShown === "weightClass"}
          timeout={0}
          classNames="selected"
          nodeRef={arrowRef}
        >
          <img
            ref={arrowRef}
            className="versus__weightclass__img"
            src={dropdownImg}
          />
        </CSSTransition>
        <span>{selectedData.weightClass.toUpperCase()}</span>
      </div>
    </div>
  );
}
