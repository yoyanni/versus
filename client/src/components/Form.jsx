import React, { useState } from "react";

import standard from "../standardInfo.js";

import "./Form.css";

const inputInfo = [
  {
    title: "General Info",
    one: "",
    two: "",
    three: "",
    fields: [
      { label: "First name", type: "text", depth: 0, name: "firstName" },
      { label: "Last name", type: "text", depth: 0, name: "lastName" },
      { label: "Nickname", type: "text", depth: 0, name: "nickname" },
      {
        options: standard.weightClasses,
        label: "Weight Class",
        depth: 0,
        name: "weightClass",
      },
      {
        options: standard.ranks,
        label: "Rank",
        depth: 0,
        name: "rank",
      },
    ],
  },
  {
    title: "Basic Info",
    one: "basic",
    two: "skills",
    three: "",
    fields: [
      {
        options: standard.levels,
        label: "Level",
        depth: 1,
        name: "level",
      },
      {
        options: standard.martialArts,
        label: "Martial Arts",
        depth: 2,
        name: "martialArt",
      },
      {
        options: standard.stances,
        label: "Stance",
        depth: 2,
        name: "stance",
      },
      { label: "Reach", depth: 2, name: "reach" },
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
    one: "standUp",
    two: "skills",
    three: "",
    fields: [
      {
        options: standard.levels,
        label: "Level",
        depth: 1,
        name: "level",
      },
      {
        options: standard.stats,
        label: "Punch Speed",
        depth: 2,
        name: "punchSpeed",
      },
      {
        options: standard.stats,
        label: "Punch Power",
        depth: 2,
        name: "punchPower",
      },
      {
        options: standard.stats,
        label: "Accuracy",
        depth: 2,
        name: "accuracy",
      },
      {
        options: standard.stats,
        label: "Blocking",
        depth: 2,
        name: "blocking",
      },
      {
        options: standard.stats,
        label: "Head Movement",
        depth: 2,
        name: "headMovement",
      },
      {
        options: standard.stats,
        label: "Footwork",
        depth: 2,
        name: "footwork",
      },
      {
        options: standard.stats,
        label: "Switch Stance",
        depth: 2,
        name: "switchStance",
      },
      {
        options: standard.stats,
        label: "Takedown Defence",
        depth: 2,
        name: "takedownDefence",
      },
      {
        options: standard.stats,
        label: "Kick Power",
        depth: 2,
        name: "kickPower",
      },
      {
        options: standard.stats,
        label: "Kick Speed",
        depth: 2,
        name: "kickSpeed",
      },
    ],
  },
  {
    title: "Grappling",
    one: "grappling",
    two: "skills",
    three: "",
    fields: [
      {
        options: standard.levels,
        label: "Level",
        depth: 1,
        name: "level",
      },
      {
        options: standard.stats,
        label: "Takedowns",
        depth: 2,
        name: "takedowns",
      },
      {
        options: standard.stats,
        label: "Top Control",
        depth: 2,
        name: "topControl",
      },
      {
        options: standard.stats,
        label: "Bottom Control",
        depth: 2,
        name: "bottomControl",
      },
      {
        options: standard.stats,
        label: "Submissions",
        depth: 2,
        name: "submissions",
      },
      {
        options: standard.stats,
        label: "Submission Defence",
        depth: 2,
        name: "submissionDefence",
      },
      {
        options: standard.stats,
        label: "Ground Striking",
        depth: 2,
        name: "groundStriking",
      },
      {
        options: standard.stats,
        label: "Clinch Striking",
        depth: 2,
        name: "clinchStriking",
      },
      {
        options: standard.stats,
        label: "Clinch Control",
        depth: 2,
        name: "clinchControl",
      },
    ],
  },
  {
    title: "Health",
    one: "health",
    two: "skills",
    three: "",
    fields: [
      {
        options: standard.levels,
        label: "Level",
        depth: 1,
        name: "level",
      },
      {
        options: standard.stats,
        label: "Cardio",
        depth: 2,
        name: "cardio",
      },
      {
        options: standard.stats,
        label: "Chin",
        depth: 2,
        name: "chin",
      },
      {
        options: standard.stats,
        label: "Body",
        depth: 2,
        name: "body",
      },
      {
        options: standard.stats,
        label: "Legs",
        depth: 2,
        name: "legs",
      },
      {
        options: standard.stats,
        label: "Recovery",
        depth: 2,
        name: "recovery",
      },
    ],
  },
  {
    title: "Moves",
    levels: standard.moveLevels,
    moveOptions: {
      punches: standard.moves.punches,
      kicks: standard.moves.kicks,
      clinch: standard.moves.clinch,
      takedowns: standard.moves.takedowns,
      ground: {
        getups: standard.moves.ground.groundMovements,
        transitions: standard.moves.ground.groundMovements,
        reversals: standard.moves.ground.groundMovements,
        sweeps: standard.moves.ground.groundMovements,
        strikes: standard.moves.ground.strikes,
      },
      submissions: standard.moves.submissions,
      combos: standard.moves.combos,
    },
  },
];

const initialFormData = {
  weightClass: "Featherweight",
  rank: "3",
  firstName: "",
  nickname: "",
  lastName: "",
  basic: {
    level: "3",
    skills: {
      martialArt: "Boxer",
      stance: "Orthodox",
      reach: "",
    },
  },
  perks: [],
  standUp: {
    level: "3",
    skills: {
      punchSpeed: "90",
      punchPower: "90",
      accuracy: "90",
      blocking: "90",
      headMovement: "90",
      footwork: "90",
      switchStance: "90",
      takedownDefence: "90",
      kickPower: "90",
      kickSpeed: "90",
    },
  },
  grappling: {
    level: "3",
    skills: {
      takedowns: "90",
      topControl: "90",
      bottomControl: "90",
      submissions: "90",
      submissionDefence: "90",
      groundStriking: "90",
      clinchStriking: "90",
      clinchControl: "90",
    },
  },
  health: {
    level: "3",
    skills: {
      cardio: "90",
      chin: "90",
      body: "90",
      legs: "90",
      recovery: "90",
    },
  },
  moves: {
    punches: [],
    kicks: [],
    clinch: [],
    takedowns: [],
    ground: {
      getups: [],
      transitions: [],
      reversals: [],
      sweeps: [],
      strikes: [],
    },
    submissions: [],
    combos: [],
  },
};

export default function Forms() {
  const [formData, setFormData] = useState(initialFormData);
  const [move, setMove] = useState({
    one: "moves",
    two: "punches",
    three: "",
    name: "Jab",
    level: "3",
  });

  console.log(formData);
  // console.log(move);

  // Update formData
  function handleChange(e, input, depthOfField = null) {
    const { name, value, selectedOptions } = e.target;

    // Update Perks in formData
    // else update anything else in formData
    if (depthOfField === null) {
      const selectedValues = Array.from(
        selectedOptions,
        (option) => option.value
      );
      if (selectedValues.length > 5) return;
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          perks: selectedValues,
        };
      });
    } else {
      const { one, two, three } = input;

      // Update anything deeply nested
      // else Update anything deeper nested
      // else Update anything nested
      // else Update anything
      if (depthOfField === 3) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [one]: {
            ...prevFormData[one],
            [two]: {
              ...prevFormData[one][two],
              [three]: {
                ...prevFormData[one][two][three],
                [name]: value,
              },
            },
          },
        }));
      } else if (depthOfField === 2) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [one]: {
            ...prevFormData[one],
            [two]: {
              ...prevFormData[one][two],
              [name]: value,
            },
          },
        }));
      } else if (depthOfField === 1) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [one]: {
            ...prevFormData[one],
            [name]: value,
          },
        }));
      } else {
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
      }
    }
  }

  // Update move State (move or level of move)
  function handleMoveChange(e) {
    const { value, name, selectedOptions } = e.target;

    // Update move (one, two, three and name)
    // else update level
    if (name === "name") {
      // Update one, two, name and three if groundMovement
      // else update one, two and name
      if (selectedOptions[0].parentElement.label.slice(0, 6) === "Ground") {
        // You will always want index 2 from parentElement.label.split(" ")
        setMove((prevMove) => ({
          ...prevMove,
          two: "ground",
          three: selectedOptions[0].parentElement.label
            .split(" ")[2]
            .toLowerCase(),
          [name]: value,
        }));
      } else {
        setMove((prevMove) => ({
          ...prevMove,
          two: selectedOptions[0].parentElement.label.toLowerCase(),
          three: "",
          [name]: value,
        }));
      }
    } else {
      setMove((prevMove) => ({ ...prevMove, level: value }));
    }
  }

  // Add Move to formData State
  function handleClick(e) {
    e.preventDefault();
    const { one, two, three } = move;

    // Add deeper nested formData
    // else add nested formData
    // Moves are level two or three, no need to check level one
    if (three) {
      const newMove = {
        name: move.name,
        level: move.level,
      };
      setFormData((prevFormData) => ({
        ...prevFormData,
        [one]: {
          ...prevFormData[one],
          [two]: {
            ...prevFormData[one][two],
            [three]: [...prevFormData[one][two][three], newMove],
          },
        },
      }));
    } else {
      const newMove = {
        name: move.name,
        level: move.level,
      };
      setFormData((prevFormData) => ({
        ...prevFormData,
        [one]: {
          ...prevFormData[one],
          [two]: [...prevFormData[one][two], newMove],
        },
      }));
    }
  }

  // Remove Move from formData
  function handleMoveRemoval(e, typeOfMove, move, groundMove = null) {
    e.preventDefault();

    // Remove deeper nested formData
    // else remove nested formData
    if (typeOfMove === "ground") {
      const filteredMoves = formData.moves.ground[groundMove].filter(
        (m) => m.name !== move.name
      );
      setFormData((prevFormData) => ({
        ...prevFormData,
        moves: {
          ...prevFormData.moves,
          ground: {
            ...prevFormData.moves.ground,
            [groundMove]: filteredMoves,
          },
        },
      }));
    } else {
      const filteredMoves = formData.moves[typeOfMove].filter(
        (m) => m.name !== move.name
      );
      setFormData((prevFormData) => ({
        ...prevFormData,
        moves: {
          ...prevFormData.moves,
          [typeOfMove]: filteredMoves,
        },
      }));
    }
  }

  // Submit Form to backend
  function handleSubmit(e) {
    e.preventDefault();

    const url = "http://192.168.1.53:5000/fighters";

    const fighter = {
      _id: null,
      weightClass: formData.weightClass,
      rank: formData.rank,
      firstName: formData.firstName,
      nickname: formData.nickname,
      lastName: formData.lastName,
      basic: {
        level: Number(formData.basic.level),
        skills: [
          { name: "Martial Art", level: formData.basic.skills.martialArt },
          { name: "Stance", level: formData.basic.skills.stance },
          { name: "Reach", level: Number(formData.basic.skills.reach) },
        ],
      },
      perks: formData.perks.map((perk) =>
        standard.perks.filter((p) => p.name === perk)
      ),
      standUp: {
        level: Number(formData.standUp.level),
        skills: Object.keys(formData.standUp.skills).map((stat, index) => ({
          name: standard.standUp[index],
          level: Number(formData.standUp.skills[stat]),
        })),
      },
      grappling: {
        level: Number(formData.grappling.level),
        skills: Object.keys(formData.grappling.skills).map((stat, index) => ({
          name: standard.grappling[index],
          level: Number(formData.grappling.skills[stat]),
        })),
      },
      health: {
        level: Number(formData.health.level),
        skills: Object.keys(formData.health.skills).map((stat, index) => ({
          name: standard.health[index],
          level: Number(formData.health.skills[stat]),
        })),
      },
      moves: formData.moves,
    };

    console.log(fighter);

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
        console.log(responseData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  // Map through input (Perks/Multiselect, Moves/Select and everything else/textfields )
  const inputJSX = inputInfo.map((input, inputIndex) => {
    let jsx;

    if (input.title === "Perks") {
      // Map through options in specific groups
      const perks = Object.keys(input.optionGroups).map((key, keyIndex) => {
        const optionGroup = input.optionGroups[key];
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
          value={formData.perks}
          onChange={handleChange}
          multiple
          size={10}
          // disabled={formData.perks.length >= 3}
        >
          {perks}
        </select>
      );
    } else if (input.title === "Moves") {
      const levels = input.levels.map((level, index) => {
        return (
          <option key={index} value={level}>
            {level}
          </option>
        );
      });

      const moves = Object.keys(input.moveOptions).map((key, keyIndex) => {
        const title = key[0].toUpperCase() + key.slice(1);

        if (key !== "ground") {
          const options = input.moveOptions[key].map((option, optionIndex) => {
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
        } else {
          const groundMovements = Object.keys(input.moveOptions.ground).map(
            (key, keyIndex) => {
              const innerTitle =
                title.concat(" - ") + key[0].toUpperCase() + key.slice(1);

              const options = input.moveOptions.ground[key].map(
                (option, optionIndex) => {
                  return (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  );
                }
              );

              return (
                <optgroup key={keyIndex} label={innerTitle}>
                  {options}
                </optgroup>
              );
            }
          );

          return groundMovements;
        }
      });

      // jsx to print
      jsx = (
        <>
          <label htmlFor="moves">Type of Move</label>
          <select name="name" value={move.name} onChange={handleMoveChange}>
            {moves}
          </select>
          <label htmlFor="level">Move Level</label>
          <select name="level" value={move.level} onChange={handleMoveChange}>
            {levels}
          </select>
          <button onClick={handleClick}>Add move</button>
        </>
      );
    } else {
      jsx = input.fields.map((field, fieldIndex) => {
        // Return selects with options
        // else return inputs
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
                value={
                  field.depth === 0
                    ? formData[field.name]
                    : field.depth === 1
                    ? formData[input.one][field.name]
                    : formData[input.one][input.two][field.name]
                }
                onChange={(e) => handleChange(e, input, field.depth)}
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
                value={
                  field.depth === 0
                    ? formData[field.name]
                    : field.depth === 1
                    ? formData[input.one][field.name]
                    : formData[input.one][input.two][field.name]
                }
                onChange={(e) => handleChange(e, input, field.depth)}
                required
              />
            </div>
          );
        }
      });
    }

    return (
      <TitleContainer
        key={inputIndex}
        title={input.title}
        note={input.note && input.note}
      >
        {jsx}
      </TitleContainer>
    );
  });

  // Display Moves
  const movesJSX = Object.keys(formData.moves).map((key, keyIndex) => {
    const title = key[0].toUpperCase() + key.slice(1);
    if (key === "ground") {
      const jsx = Object.keys(formData.moves.ground).map(
        (innerKey, innerKeyIndex) => {
          const innerTitle = innerKey[0].toUpperCase() + innerKey.slice(1);
          const innerJSX = formData.moves.ground[innerKey].map(
            (move, moveIndex) => {
              return (
                <div key={moveIndex}>
                  <span>
                    {move.name}
                    {move.level}
                  </span>
                  <button
                    onClick={(e) => handleMoveRemoval(e, key, move, innerKey)}
                  >
                    Remove
                  </button>
                </div>
              );
            }
          );

          return (
            <TitleContainer key={innerKeyIndex} title={innerTitle}>
              {formData.moves.ground[innerKey].length
                ? innerJSX
                : "No moves yet."}
            </TitleContainer>
          );
        }
      );
      return (
        <TitleContainer key={keyIndex} title={title}>
          {jsx}
        </TitleContainer>
      );
    } else {
      // console.log(moves);
      const jsx = formData.moves[key].map((move, moveIndex) => {
        return (
          <div key={moveIndex}>
            <span>
              {move.name}
              {move.level}
            </span>
            <button onClick={(e) => handleMoveRemoval(e, key, move)}>
              Remove
            </button>
          </div>
        );
      });
      return (
        <TitleContainer key={keyIndex} title={title}>
          {formData.moves[key].length ? jsx : "No moves yet."}
        </TitleContainer>
      );
    }
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
