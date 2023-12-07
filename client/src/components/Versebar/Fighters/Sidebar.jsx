import { CSSTransition } from "react-transition-group";
import { useRef } from "react";

import dropdownImg from "../../../assets/dropdown-white.png";
import "./Sidebar.css";

export default function Sidebar({ side, selectedData, listShown, toggleList }) {
  // Refs for CSSTransition
  const sidebarRef = useRef(null);
  const redArrowRef = useRef(null);
  const blueArrowRef = useRef(null);
  return (
    <div className={`versus__fighters__${side}`}>
      {side === "red" && (
        <div
          className="versus__fighters__red__arrow"
          onClick={() => toggleList("red")}
        >
          <CSSTransition
            in={listShown === "red"}
            timeout={0}
            classNames="red-arrow"
            nodeRef={redArrowRef}
          >
            <img
              ref={redArrowRef}
              className="versus__fighters__red__arrow__img"
              src={dropdownImg}
            />
          </CSSTransition>
        </div>
      )}

      <CSSTransition
        in={side === listShown}
        mountOnEnter
        timeout={0}
        classNames="name"
        nodeRef={sidebarRef}
      >
        <div ref={sidebarRef} className={`versus__fighters__${side}__name`}>
          <span className={`versus__fighters__${side}__name__first`}>
            {selectedData[side].firstName.toUpperCase()}
          </span>
          <span className={`versus__fighters__${side}__name__last`}>
            {selectedData[side].lastName.toUpperCase()}
          </span>
        </div>
      </CSSTransition>

      {side === "blue" && (
        <div
          className="versus__fighters__blue__arrow"
          onClick={() => toggleList("blue")}
        >
          <CSSTransition
            in={listShown === "blue"}
            timeout={0}
            classNames="blue-arrow"
            nodeRef={blueArrowRef}
          >
            <img
              ref={blueArrowRef}
              className="versus__fighters__blue__arrow__img"
              src={dropdownImg}
            />
          </CSSTransition>
        </div>
      )}
    </div>
  );
}
