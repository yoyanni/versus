import React, { useState } from "react";

import standard from "../standardInfo.js";

import "./Form.css";

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
        label: "First name",
        type: "text",
        parentKey: "general",
        name: "firstName",
      },
      {
        label: "Last name",
        type: "text",
        parentKey: "general",
        name: "lastName",
      },
      {
        label: "Nickname",
        type: "text",
        parentKey: "general",
        name: "nickname",
      },
      {
        options: standard.weightClasses,
        label: "Weight Class",
        parentKey: "general",
        name: "weightClass",
      },
      {
        options: standard.ranks,
        label: "Rank",
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
        label: "Level",
        parentKey: "levels",
        name: "overAllLevel",
      },
      {
        options: standard.martialArts,
        label: "Martial Arts",
        parentKey: "basic",
        name: "martialArt",
      },
      {
        options: standard.stances,
        label: "Stance",
        parentKey: "basic",
        name: "stance",
      },
      { label: "Reach", type: "number", parentKey: "basic", name: "reach" },
    ],
  },
  {
    title: "Perks",
    note: "(Select up to 5 perks)",
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
        label: "Level",
        parentKey: "levels",
        name: "standUpLevel",
      },
      ...standard.standUp.map((stat) => ({
        options: standard.stats,
        label: stat.name,
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
        label: "Level",
        parentKey: "levels",
        name: "grapplingLevel",
      },
      ...standard.grappling.map((stat) => ({
        options: standard.stats,
        label: stat.name,
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
        label: "Level",
        parentKey: "levels",
        name: "healthLevel",
      },
      ...standard.health.map((stat) => ({
        options: standard.stats,
        label: stat.name,
        parentKey: "healthStats",
        name: stat.propName,
      })),
    ],
  },
  {
    title: "Moves",
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

const moveKeys = [
  "punches",
  "kicks",
  "clinch",
  "takedowns",
  "getups",
  "transitions",
  "reversals",
  "sweeps",
  "strikes",
  "submissions",
  "combos",
];

export default function Forms() {
  const [formData, setFormData] = useState(initialFormData);

  // Update formData
  function handleFormChange(e, parentKey) {
    const { name, value, selectedOptions } = e.target;

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

    const parentKey = formData.tempMove.parentKey;
    const isGroundMove = [
      "getups",
      "transitions",
      "reversals",
      "sweeps",
      "strikes",
    ].includes(parentKey);
    const moveName = formData.tempMove.moveName;

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
  // function handleMoveRemoval(e, typeOfMove, move, groundMove = null) {
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

    const url = "http://192.168.1.53:5000/fighters";

    const hasMoves = moveKeys.every((key) => {
      return formData[key].length !== 0;
    });

    if (formData.perks.length === 0) {
      alert("Please choose at least one perk.");
      return;
    } else if (hasMoves === false) {
      alert("Please fill in all moves.");
      return;
    } else {
      const fighter = {
        _id: null,
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
          console.log("Successfully added to the db");
          setFormData(initialFormData);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }

  // Inputs
  const inputJSX = sections.map((section, sectionIndex) => {
    let jsx;
    if (section.title === "Perks") {
      // Map through options in specific groups
      const perks = Object.keys(section.optionGroups).map((key, keyIndex) => {
        const optionGroup = section.optionGroups[key];
        const options = optionGroup.options.map((option, optionIndex) => {
          return (
            <option key={optionIndex} value={option.name}>
              {option.name}
            </option>
          );
        });
        return (
          <optgroup key={keyIndex} label={optionGroup.label}>
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
          multiple
          size={10}
        >
          {perks}
        </select>
      );
    } else if (section.title === "Moves") {
      const levels = section.levels.map((level, index) => {
        return (
          <option key={index} value={level}>
            {level}
          </option>
        );
      });

      const moves = Object.keys(section.optionGroups).map((key, keyIndex) => {
        const title = key[0].toUpperCase() + key.slice(1);
        const optionGroup = section.optionGroups[key];
        if (key === "ground") {
          const groundMovements = Object.keys(optionGroup).map(
            (innerKey, innerKeyIndex) => {
              const subtitle = innerKey[0].toUpperCase() + innerKey.slice(1);
              const innerTitle = title.concat(" - " + subtitle);

              const options = optionGroup[innerKey].map(
                (option, optionIndex) => {
                  // value must be unique, that is why the indices are added but they do need to be removed afterwards
                  // an empty string is added to implicitly coerce the indices so they do not add up
                  return (
                    <option
                      key={optionIndex}
                      value={option.concat("" + innerKeyIndex + optionIndex)}
                    >
                      {option.concat(" " + subtitle)}
                    </option>
                  );
                }
              );

              return (
                <optgroup key={innerKeyIndex} label={innerTitle}>
                  {options}
                </optgroup>
              );
            }
          );

          return groundMovements;
        } else {
          const options = optionGroup.map((option, optionIndex) => {
            return (
              <option key={optionIndex} value={option}>
                {option}
              </option>
            );
          });

          return (
            <optgroup key={keyIndex} label={title}>
              {options}
            </optgroup>
          );
        }
      });

      // jsx to print
      jsx = (
        <>
          <label htmlFor="moveName">Type of Move</label>
          <select
            name="moveName"
            value={formData[section.parentKey].moveName}
            onChange={(e) => handleFormChange(e, section.parentKey)}
          >
            {moves}
          </select>
          <label htmlFor="level">Move Level</label>
          <select
            name="level"
            value={formData[section.parentKey].level}
            onChange={(e) => handleFormChange(e, section.parentKey)}
          >
            {levels}
          </select>
          <button onClick={handleMoveAddition}>Add move</button>
        </>
      );
    } else {
      jsx = section.fields.map((field, fieldIndex) => {
        if (field.options) {
          const options = field.options.map((option, optionIndex) => {
            return (
              <option key={optionIndex} value={option}>
                {option}
              </option>
            );
          });

          return (
            <div key={fieldIndex}>
              <label className="label" htmlFor={field.name}>
                {field.label}
              </label>
              <select
                name={field.name}
                value={formData[field.parentKey][field.name]}
                onChange={(e) => handleFormChange(e, field.parentKey)}
              >
                {options}
              </select>
            </div>
          );
        } else {
          return (
            <div key={fieldIndex}>
              <label className="label" htmlFor={field.name}>
                {field.label}
              </label>
              <input
                className="input"
                type={field.type}
                name={field.name}
                value={formData[field.parentKey][field.name]}
                onChange={(e) => handleFormChange(e, field.parentKey)}
                required
              />
            </div>
          );
        }
      });
    }
    return (
      <TitleContainer
        key={sectionIndex}
        title={section.title}
        note={section.note && section.note}
      >
        {jsx}
      </TitleContainer>
    );
  });

  // Display Moves
  const movesJSX = moveKeys.map((key, keyIndex) => {
    const typeOfMove = formData[key];
    const title = key[0].toUpperCase() + key.slice(1);
    const jsx = typeOfMove.map((move, index) => {
      return (
        <div key={index}>
          <p>
            {move.name}
            {move.level}
          </p>
          <button onClick={(e) => handleMoveRemoval(e, key, move)}>
            Remove
          </button>
        </div>
      );
    });
    return (
      <TitleContainer key={keyIndex} title={title}>
        {typeOfMove.length ? jsx : "No moves yet."}
      </TitleContainer>
    );
  });

  return (
    <form onSubmit={handleSubmit}>
      {inputJSX}
      {movesJSX}
      <button type="submit">Submit</button>
    </form>
  );
}

function TitleContainer({ title, note = null, children }) {
  return (
    <div>
      <h4>
        {title}
        {note}
      </h4>
      {children}
    </div>
  );
}
