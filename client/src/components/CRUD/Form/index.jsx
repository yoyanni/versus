import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import AccordionItem from "../../Accordion/AccordionItem.jsx";
import TitleContainer from "./TitleContainer.jsx";
import Accordion from "../../Accordion/index.jsx";
import standard from "../../../standardInfo.js";
import "./index.css";

const initialFormData = {
  general: {
    weightClass: "Featherweight",
    rank: "3",
    firstName: "",
    nickname: "",
    lastName: "",
  },
  levels: {
    overAllLevel: 3,
    standUpLevel: 3,
    grapplingLevel: 3,
    healthLevel: 3,
  },
  perks: [],
  basic: {
    martialArt: "Boxer",
    stance: "Orthodox",
    reach: "",
  },
  standUpStats: {
    punchSpeed: 90,
    punchPower: 90,
    accuracy: 90,
    blocking: 90,
    headMovement: 90,
    footwork: 90,
    switchStance: 90,
    takedownDefence: 90,
    kickPower: 90,
    kickSpeed: 90,
  },
  grapplingStats: {
    takedowns: 90,
    topControl: 90,
    bottomControl: 90,
    submissions: 90,
    submissionDefence: 90,
    groundStriking: 90,
    clinchStriking: 90,
    clinchControl: 90,
  },
  healthStats: {
    cardio: 90,
    chin: 90,
    body: 90,
    legs: 90,
    recovery: 90,
  },
  punches: [],
  kicks: [],
  clinch: [],
  takedowns: [],
  getups: [],
  transitions: [],
  reversals: [],
  sweeps: [],
  strikes: [],
  submissions: [],
  combos: [],
  tempMove: {
    moveName: "Jab",
    level: 3,
    parentKey: "punches",
  },
};

const sections = [
  {
    title: "General Info",
    fields: [
      {
        label: "First Name:",
        type: "text",
        parentKey: "general",
        name: "firstName",
      },
      {
        label: "Last Name:",
        type: "text",
        parentKey: "general",
        name: "lastName",
      },
      {
        label: "Nickname:",
        type: "text",
        parentKey: "general",
        name: "nickname",
      },
      {
        options: standard.weightClasses,
        label: "Weight Class:",
        parentKey: "general",
        name: "weightClass",
      },
      {
        options: standard.ranks,
        label: "Rank:",
        parentKey: "general",
        name: "rank",
      },
    ],
  },
  {
    title: "Basic Info",
    fields: [
      {
        options: standard.levels,
        label: "Level:",
        parentKey: "levels",
        name: "overAllLevel",
      },
      {
        options: standard.martialArts,
        label: "Martial Arts:",
        parentKey: "basic",
        name: "martialArt",
      },
      {
        options: standard.stances,
        label: "Stance:",
        parentKey: "basic",
        name: "stance",
      },
      { label: "Reach:", type: "number", parentKey: "basic", name: "reach" },
    ],
  },
  {
    title: "Perks",
    note: " - Select up to 5 perks",
    optionGroups: {
      standUp: {
        label: "Stand-Up",
        options: standard.perks.filter((p) => p.type === "Stand-Up"),
      },
      grappling: {
        label: "Grappling",
        options: standard.perks.filter((p) => p.type === "Grappling"),
      },
      health: {
        label: "Health",
        options: standard.perks.filter((p) => p.type === "Health & Stamina"),
      },
    },
  },
  {
    title: "Stand-Up",
    fields: [
      {
        options: standard.levels,
        label: "Level:",
        parentKey: "levels",
        name: "standUpLevel",
      },
      ...standard.standUp.map((stat) => ({
        options: standard.stats,
        label: `${stat.name}:`,
        parentKey: "standUpStats",
        name: stat.propName,
      })),
    ],
  },
  {
    title: "Grappling",
    fields: [
      {
        options: standard.levels,
        label: "Level:",
        parentKey: "levels",
        name: "grapplingLevel",
      },
      ...standard.grappling.map((stat) => ({
        options: standard.stats,
        label: `${stat.name}:`,
        parentKey: "grapplingStats",
        name: stat.propName,
      })),
    ],
  },
  {
    title: "Health",
    fields: [
      {
        options: standard.levels,
        label: "Level:",
        parentKey: "levels",
        name: "healthLevel",
      },
      ...standard.health.map((stat) => ({
        options: standard.stats,
        label: `${stat.name}:`,
        parentKey: "healthStats",
        name: stat.propName,
      })),
    ],
  },
  {
    title: "Add Moves",
    parentKey: "tempMove",
    levels: standard.moveLevels,
    optionGroups: {
      ...standard.moves,
      ground: {
        getups: standard.moves.ground.groundMovements,
        transitions: standard.moves.ground.groundMovements,
        reversals: standard.moves.ground.groundMovements,
        sweeps: standard.moves.ground.groundMovements,
        strikes: standard.moves.ground.strikes,
      },
    },
  },
];

export default function Form({ fighters = null, setFighters }) {
  const { id } = useParams();
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [formData, setFormData] = useState(formatState());
  const navigate = useNavigate();

  // Toggles which Accordion is active
  function handleClick(id) {
    if (id === activeAccordion) setActiveAccordion(null);
    else setActiveAccordion(id);
  }

  // Mainly for state and when editing fighter
  // Find fighter and format the data for state
  function formatState() {
    if (fighters === null) return initialFormData;

    const fighter = fighters.find((f) => f._id === Number(id));

    const {
      weightClass,
      rank,
      firstName,
      nickname,
      lastName,
      basic,
      perks,
      standUp,
      grappling,
      health,
      moves,
    } = fighter;

    const formattedFighter = {
      general: {
        weightClass: weightClass,
        rank: rank,
        firstName: firstName,
        nickname: nickname,
        lastName: lastName,
      },
      levels: {
        overAllLevel: basic.level,
        standUpLevel: standUp.level,
        grapplingLevel: grappling.level,
        healthLevel: health.level,
      },
      perks: perks.map((perk) => perk.name),
      basic: {
        martialArt: basic.skills.martialArt,
        stance: basic.skills.stance,
        reach: basic.skills.reach,
      },
      standUpStats: {
        punchSpeed: standUp.skills.punchSpeed,
        punchPower: standUp.skills.punchPower,
        accuracy: standUp.skills.accuracy,
        blocking: standUp.skills.blocking,
        headMovement: standUp.skills.headMovement,
        footwork: standUp.skills.footwork,
        switchStance: standUp.skills.switchStance,
        takedownDefence: standUp.skills.takedownDefence,
        kickPower: standUp.skills.kickPower,
        kickSpeed: standUp.skills.kickSpeed,
      },
      grapplingStats: {
        takedowns: grappling.skills.takedowns,
        topControl: grappling.skills.topControl,
        bottomControl: grappling.skills.bottomControl,
        submissions: grappling.skills.submissions,
        submissionDefence: grappling.skills.submissionDefence,
        groundStriking: grappling.skills.groundStriking,
        clinchStriking: grappling.skills.clinchStriking,
        clinchControl: grappling.skills.clinchControl,
      },
      healthStats: {
        cardio: health.skills.cardio,
        chin: health.skills.chin,
        body: health.skills.body,
        legs: health.skills.legs,
        recovery: health.skills.recovery,
      },
      punches: moves.punches,
      kicks: moves.kicks,
      clinch: moves.clinch,
      takedowns: moves.takedowns,
      getups: moves.ground.getups,
      transitions: moves.ground.transitions,
      reversals: moves.ground.reversals,
      sweeps: moves.ground.sweeps,
      strikes: moves.ground.strikes,
      submissions: moves.submissions,
      combos: moves.combos,
      tempMove: {
        moveName: "Jab",
        level: 3,
        parentKey: "punches",
      },
    };

    return formattedFighter;
  }

  // Update formData
  function handleFormChange(e, parentKey) {
    const { name, value, selectedOptions } = e.target;

    // Check if perks because parentKey will be null
    // and selectedOptions will only have one value
    if (name === "perks") {
      const selectedValues = Array.from(
        selectedOptions,
        (option) => option.value
      );
      if (selectedValues.length > 5) return;
      setFormData((prevFormData) => ({
        ...prevFormData,
        perks: selectedValues,
      }));
    } else {
      // "reach" and "overAllLevel" are numbers in the "general"
      // and "basic" areas where everything else is string
      // so that is why I check those first specifically and then the other areas
      const isNumber =
        (["reach", "overAllLevel"].includes(name) ||
          !["general", "basic", "tempMove"].includes(parentKey)) &&
        value !== "";

      setFormData((prevFormData) => {
        let newFormData = {
          ...prevFormData,
          [parentKey]: {
            ...prevFormData[parentKey],
            [name]: isNumber ? Number(value) : value,
          },
        };

        // This removes the "Ground - " from the optgroups to get the parentKey
        // Also adds the parentkey for the temp move to state
        if (name === "moveName") {
          const groupLabel = selectedOptions[0].parentElement.label;
          const key = groupLabel.replace("Ground - ", "").toLowerCase();
          newFormData[parentKey].parentKey = key;
        }

        return newFormData;
      });
    }
  }

  // Add Move to fighter moves
  function handleMoveAddition(e) {
    e.preventDefault();

    const moveName = formData.tempMove.moveName;
    const parentKey = formData.tempMove.parentKey;
    const isGroundMove = [
      "getups",
      "transitions",
      "reversals",
      "sweeps",
      "strikes",
    ].includes(parentKey);

    // Indices were added to make the options unique
    // They were saved to state as such so slice the last two characters
    const newMove = {
      name: isGroundMove ? moveName.slice(0, -2) : moveName,
      level: formData.tempMove.level,
    };

    setFormData((prevFormData) => ({
      ...prevFormData,
      [parentKey]: [...prevFormData[parentKey], newMove],
    }));
  }

  // Remove Move from formData
  function handleMoveRemoval(e, typeOfMove, move) {
    e.preventDefault();
    const filteredMoves = formData[typeOfMove].filter(
      (m) => !(m.name === move.name && m.level === move.level)
    );

    setFormData((prevFormData) => ({
      ...prevFormData,
      [typeOfMove]: filteredMoves,
    }));
  }

  // Submit Form to backend
  function handleSubmit(e) {
    e.preventDefault();

    // check if editing or creating
    const url = id
      ? `${import.meta.env.VITE_API_URL}/${id}`
      : `${import.meta.env.VITE_API_URL}`;

    // Check if all mandatory moves have been given to submit form to backend
    const hasMoves = standard.moveKeys.every((key) => {
      if (key === "ground") {
        return standard.groundKeys.every(
          (groundKey) => formData[groundKey].length !== 0
        );
      } else {
        return formData[key].length !== 0;
      }
    });

    // Check perks and moves
    // If alright, format the fighter object that will be sent to DB
    if (formData.perks.length === 0) {
      alert("Please choose at least one perk.");
      return;
    } else if (hasMoves === false) {
      alert("Please fill in all moves.");
      return;
    } else {
      const fighter = {
        ...formData.general,
        basic: { level: formData.levels.overAllLevel, skills: formData.basic },
        perks: formData.perks.map((perk) =>
          standard.perks.find((p) => p.name === perk)
        ),
        standUp: {
          level: formData.levels.standUpLevel,
          skills: formData.standUpStats,
        },
        grappling: {
          level: formData.levels.grapplingLevel,
          skills: formData.grapplingStats,
        },
        health: {
          level: formData.levels.healthLevel,
          skills: formData.healthStats,
        },
        moves: {
          punches: formData.punches,
          kicks: formData.kicks,
          clinch: formData.clinch,
          takedowns: formData.takedowns,
          ground: {
            getups: formData.getups,
            transitions: formData.transitions,
            reversals: formData.reversals,
            sweeps: formData.sweeps,
            strikes: formData.strikes,
          },
          submissions: formData.submissions,
          combos: formData.combos,
        },
      };

      // Check if fighter is new or being updated
      if (id) {
        fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(fighter),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Error: " + response.status);
            }
            return response.json();
          })
          .then((responseData) => {
            setFighters(responseData);
            alert("Successfully updated!");
            navigate(-1);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      } else {
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(fighter),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Error: " + response.status);
            }
            return response.json();
          })
          .then((responseData) => {
            const id = responseData[responseData.length - 1]._id;
            setFighters(responseData);
            alert("Successfully added!");
            navigate(`/fighters/${id}`, { replace: true });
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    }
  }

  // Inputs/Selects
  const inputJSX = sections.map((section, sectionIndex) => {
    let jsx;
    if (section.title === "Perks") {
      // Map through options in specific groups
      const perks = Object.keys(section.optionGroups).map((key) => {
        const optionGroup = section.optionGroups[key];
        const options = optionGroup.options.map((option) => {
          return (
            <option key={option.name} value={option.name}>
              {option.name}
            </option>
          );
        });
        return (
          <optgroup key={key} label={optionGroup.label}>
            {options}
          </optgroup>
        );
      });

      // jsx to print
      jsx = (
        <select
          name="perks"
          value={formData.perks}
          onChange={handleFormChange}
          className="form__section__field__select-multi"
          multiple
          size={10}
        >
          {perks}
        </select>
      );
    } else if (section.title === "Add Moves") {
      // Create Level options for select tag
      const levels = section.levels.map((level) => {
        return (
          <option key={level} value={level}>
            {level}
          </option>
        );
      });

      // Create optgroups & options for "Add Move" select tag
      const moves = Object.keys(section.optionGroups).map((key) => {
        const title = key[0].toUpperCase() + key.slice(1);
        const optionGroup = section.optionGroups[key];

        // "ground" adds more details to the optgroups and options
        if (key === "ground") {
          return Object.keys(optionGroup).map((innerKey, innerKeyIndex) => {
            const subtitle = innerKey[0].toUpperCase() + innerKey.slice(1);
            const innerTitle = title.concat(" - " + subtitle);

            // value must be unique, that is why the indices are added but they do need to be removed afterwards
            // an empty string is added to implicitly coerce the indices so they do not add up
            const options = optionGroup[innerKey].map((option, optionIndex) => (
              <option
                key={option}
                value={option.concat("" + innerKeyIndex + optionIndex)}
              >
                {option.concat(" " + subtitle)}
              </option>
            ));

            return (
              <optgroup key={innerKey} label={innerTitle}>
                {options}
              </optgroup>
            );
          });
        } else {
          return (
            <optgroup key={key} label={title}>
              {optionGroup.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </optgroup>
          );
        }
      });

      // "Add Move" JSX section
      jsx = (
        <>
          <div className="form__section__field">
            <label htmlFor="moveName" className="form__section__field__label">
              Move:
            </label>
            <select
              name="moveName"
              value={formData[section.parentKey].moveName}
              onChange={(e) => handleFormChange(e, section.parentKey)}
              className="form__section__field__select"
            >
              {moves}
            </select>
          </div>
          <div className="form__section__field">
            <label htmlFor="level" className="form__section__field__label">
              Level:
            </label>
            <select
              name="level"
              value={formData[section.parentKey].level}
              onChange={(e) => handleFormChange(e, section.parentKey)}
              className="form__section__field__select"
            >
              {levels}
            </select>
          </div>
          <button
            onClick={handleMoveAddition}
            className="form__section__field__button"
          >
            Add move
          </button>
        </>
      );
    } else {
      jsx = section.fields.map((field, fieldIndex) => {
        // if select tag (Dropdown)
        // else normal input tag
        if (field.options) {
          const options = field.options.map((option, optionIndex) => {
            return (
              <option key={optionIndex} value={option}>
                {option}
              </option>
            );
          });

          return (
            <div key={fieldIndex} className="form__section__field">
              <label
                className="form__section__field__label"
                htmlFor={field.name}
              >
                {field.label}
              </label>
              <select
                onChange={(e) => handleFormChange(e, field.parentKey)}
                value={formData[field.parentKey][field.name]}
                className="form__section__field__select"
                name={field.name}
              >
                {options}
              </select>
            </div>
          );
        } else {
          return (
            <div key={field.name} className="form__section__field">
              <label
                className="form__section__field__label"
                htmlFor={field.name}
              >
                {field.label}
              </label>
              <input
                className="form__section__field__input"
                type={field.type}
                name={field.name}
                value={formData[field.parentKey][field.name]}
                onChange={(e) => handleFormChange(e, field.parentKey)}
                placeholder={field.label.slice(0, -1)}
                required={field.name !== "nickname" && true}
              />
            </div>
          );
        }
      });
    }
    return (
      <TitleContainer
        key={section.title}
        title={section.title}
        note={section.note && section.note}
      >
        {jsx}
      </TitleContainer>
    );
  });

  // Display moves that the fighter currently has
  const movesJSX = standard.moveKeys.map((key) => {
    let typeOfMove = formData[key];
    const title = key[0].toUpperCase() + key.slice(1);

    // "ground" has a further title to add
    if (key === "ground") {
      const jsx = standard.groundKeys.map((groundKey) => {
        typeOfMove = formData[groundKey];
        const groundTitle = groundKey[0].toUpperCase() + groundKey.slice(1);
        const groundJSX = formData[groundKey].map((groundMove) => (
          <AccordionItem
            key={groundMove.name}
            nestLevel="two"
            handleMoveRemoval={(e) =>
              handleMoveRemoval(e, groundKey, groundMove)
            }
          >
            {groundMove.name}: {groundMove.level}
          </AccordionItem>
        ));
        return (
          <Accordion
            key={groundKey}
            title={groundTitle}
            nestLevel="one"
            hasOwnState
          >
            {typeOfMove.length ? (
              groundJSX
            ) : (
              <div className="no-moves">No moves yet.</div>
            )}
          </Accordion>
        );
      });
      return (
        <Accordion
          key={key}
          title={title}
          handleClick={handleClick}
          activeAccordion={activeAccordion}
        >
          {jsx}
        </Accordion>
      );
    } else {
      const jsx = typeOfMove.map((move, index) => {
        return (
          <AccordionItem
            key={index}
            handleMoveRemoval={(e) => handleMoveRemoval(e, key, move)}
          >
            {move.name}: {move.level}
          </AccordionItem>
        );
      });
      return (
        <Accordion
          key={key}
          title={title}
          handleClick={handleClick}
          activeAccordion={activeAccordion}
        >
          {typeOfMove.length ? (
            jsx
          ) : (
            <div className="no-moves">No moves yet.</div>
          )}
        </Accordion>
      );
    }
  });

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="form__heading">
          {id ? "Edit a Fighter" : "Create a Fighter"}
        </h1>
        {inputJSX}
        <div className="form__moves">{movesJSX}</div>
        <button type="submit" className="form__button">
          {id ? "Save" : "Create"}
        </button>
      </form>
    </>
  );
}
