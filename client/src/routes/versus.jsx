import { useLocation } from "react-router-dom";
import { Steps } from "intro.js-react";
import { useState } from "react";

import Versebar from "../components/Versebar";
import standard from "../standardInfo.js";
import Cards from "../components/Cards";

import "intro.js/introjs.css";

// Eventually will be driven by user preference
const initialState = {
  weightClass: 0,
  red: standard.defaultFighters[0].red,
  blue: standard.defaultFighters[0].blue,
};

// tour requires class names to identify elements
const tourElementClassNames = {
  rankedClasses: ".nav__bot__weight",
  rankedTimer: ".nav__bot__timer",
  classSelected: ".versus__weightclass",
  redFighter: ".versus__fighters__red",
  blueFighter: ".versus__fighters__blue",
  allFighters: ".nav__top__link",
  cardLevel: ".cards__card__title-container__level",
  textStatPair: ".cards__card__content__stat-pair",
  numStatPair: ".cards__card__content__stat-pair:nth-child(6)",
  allPerks: ".cards__card__content__perks",
  standUpAverage:
    ".cards__card:nth-child(3) .cards__card__title-container__level",
};

export default function Home({ fighters }) {
  const [selectedIds, setSelectedIds] = useState(initialState);
  const { state } = useLocation();
  const [steps, setSteps] = useState({
    stepsEnabled: state ?? false,
    initialStep: 0,
    steps: [
      {
        element: tourElementClassNames.classSelected,
        title: "Select your Weight Class",
        intro:
          "Here you can select the specific weight class for the fighter you are looking for. (Generic fighters are included in every weight class)",
      },
      {
        element: tourElementClassNames.redFighter,
        title: "Select the Red Fighter",
        intro:
          "Here you can select the Red (Left-side) Fighter to view and compare stats.",
      },
      {
        element: tourElementClassNames.blueFighter,
        title: "Select the Blue Fighter",
        intro:
          "Here you can select the Blue (Right-side) Fighter to view and compare stats.",
      },
      {
        element: tourElementClassNames.rankedClasses,
        title: "Online Rank Weight Classes",
        highlightClass: "customHighlight",
        intro:
        "Displays the currently playable weight classes in the online rank mode.",
      },
      {
        element: tourElementClassNames.rankedTimer,
        title: "Online Rank Timer",
        highlightClass: "customHighlight",
        intro:
        "Displays the current time left the previously shown weight classes.",
      },
      {
        element: tourElementClassNames.allFighters,
        title: "All Fighters",
        highlightClass: "customHighlight",
        intro:
          "Here you can look up fighters in any weight class and view their specific moveset.",
      },
      {
        element: tourElementClassNames.cardLevel,
        title: "Overall Fighter Level",
        intro: "Displays the overall fighter level.",
      },
      {
        element: tourElementClassNames.textStatPair,
        title: "Text Stats",
        intro:
          "These stats will only be colored to display that there is a difference between the fighters.",
      },
      {
        element: tourElementClassNames.numStatPair,
        title: "Number Stats",
        intro:
          "These stats will only be colored to display which fighter is superior regarding the specific stat.",
      },
      {
        element: tourElementClassNames.allPerks,
        title: "Fighter Perks",
        intro:
          "This section displays the fighters perks. You can click on each perk to get an explanation of it (once tour is over).",
      },

      {
        element: tourElementClassNames.standUpAverage,
        title: "Overall and Average Stat Level",
        intro:
          "Displays the overall stat level and within the parenthesis, the average level of this stat group.",
      },
    ],
  });

  // The selectedData that drives the comparison feature
  const selectedData = {
    weightClass: standard.weightClasses[selectedIds.weightClass],
    red: fighters.find((fighter) => fighter._id == selectedIds.red),
    blue: fighters.find((fighter) => fighter._id == selectedIds.blue),
  };

  // Looks up Fighters filtered by weightClass State
  const weightFighters = fighters.filter((fighter) => {
    return (
      fighter.weightClass == selectedData.weightClass ||
      fighter.weightClass == "Generic"
    );
  });

  // Changes the weightClass State
  function changeWeight(id) {
    if (selectedIds.weightClass === id) return;
    else {
      setSelectedIds({
        weightClass: id,
        red: standard.defaultFighters[id].red,
        blue: standard.defaultFighters[id].blue,
      });
    }
  }

  // Changes the fighters State
  function changeFighters(id, side) {
    if (selectedIds[side] === id) return;
    setSelectedIds((prevState) => ({ ...prevState, [side]: id }));
  }

  return (
    fighters.length !== 0 && (
      <>
        <Steps
          enabled={steps.stepsEnabled}
          steps={steps.steps}
          initialStep={steps.initialStep}
          onExit={() => setSteps((prev) => ({ ...prev, stepsEnabled: false }))}
          options={{
            scrollToElement: false,
            disableInteraction: false,
          }}
        />
        <Cards red={selectedData.red} blue={selectedData.blue} />
        <Versebar
          weightFighters={weightFighters}
          selectedData={selectedData}
          changeWeight={changeWeight}
          changeFighters={changeFighters}
        />
      </>
    )
  );
}
