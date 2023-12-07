import ExpandedList from "./ExpandedList";
import Sidebar from "./Sidebar";
import "./index.css";

export default function Fighters({
  selectedData,
  listShown,
  toggleList,
  weightFighters,
  handleFighterChange,
}) {
  return (
    <>
      <div className="versus__fighters">
        <Sidebar
          side="red"
          selectedData={selectedData}
          listShown={listShown}
          toggleList={toggleList}
        />
        <Sidebar
          side="blue"
          selectedData={selectedData}
          listShown={listShown}
          toggleList={toggleList}
        />
      </div>
      <ExpandedList
        side="red"
        listShown={listShown}
        weightFighters={weightFighters}
        handleFighterChange={handleFighterChange}
      />
      <ExpandedList
        side="blue"
        listShown={listShown}
        weightFighters={weightFighters}
        handleFighterChange={handleFighterChange}
      />
    </>
  );
}