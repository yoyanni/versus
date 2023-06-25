const standard = {
  weightClasses: [
    "Strawweight",
    "Flyweight (W)",
    "Bantamweight (W)",
    "Flyweight",
    "Bantamweight",
    "Featherweight",
    "Lightweight",
    "Welterweight",
    "Middleweight",
    "Light Heavyweight",
    "Heavyweight",
  ],
  ranks: [
    "Champ",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
  ],
  levels: ["1.5", "2", "2.5", "3", "3.5", "4", "4.5", "5"],
  moveLevels: ["1", "2", "3", "4", "5"],
  stats: [
    "79",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "100",
  ],
  martialArts: [
    "Boxer",
    "Pressure Boxer",
    "Kickboxer",
    "Jiu-Jitsu",
    "Wrestler",
    "Balanced",
  ],
  stances: ["Orthodox", "Southpaw"],
  perks: [
    {
      name: "Laser Focus",
      description:
        "Straights, Superman, and Spinning Punches are faster and more accurate.",
      type: "Stand-Up",
    },
    {
      name: "Fast Hands",
      description:
        "Hooks, Uppercuts and Overhands are faster and more accurate.",
      type: "Stand-Up",
    },
    {
      name: "Frontal Assault",
      description: "Front and Side kicks are faster and more accurate.",
      type: "Stand-Up",
    },
    {
      name: "Crazy Legs",
      description: "Roundhouse and Switch Kicks are faster and more accurate.",
      type: "Stand-Up",
    },
    {
      name: "Taekwondo",
      description: "Spin Kicks are faster and more accurate.",
      type: "Stand-Up",
    },
    {
      name: "Razor Wire",
      description: "Standing knees and elbows are faster and more accurate.",
      type: "Stand-Up",
    },
    {
      name: "Bulldog",
      description:
        "Blocks more effectively when standing still or moving forwards.",
      type: "Stand-Up",
    },
    {
      name: "Weathering Storms",
      description: "Blocks more effectively when moving backwards or sideways.",
      type: "Stand-Up",
    },
    {
      name: "Steel Checks",
      description: "Checked leg kicks reflect more damage.",
      type: "Stand-Up",
    },
    {
      name: "Pay To Miss",
      description:
        "Sways while standing still or moving forwards evade more effectively.",
      type: "Stand-Up",
    },
    {
      name: "Untouchable",
      description:
        "Sways while moving backwards or sideways evade more effectively.",
      type: "Stand-Up",
    },
    {
      name: "Predator",
      description: "Faster movement when advancing or moving sideways.",
      type: "Stand-Up",
    },
    {
      name: "Skirmisher",
      description: "Faster movement when moving backwards.",
      type: "Stand-Up",
    },
    {
      name: "No Cigar",
      description: "Improved submission defense in top positions.",
      type: "Grappling",
    },
    {
      name: "Wrestle Clinic",
      description:
        "Boosts a fighters Grapple Defence whenever they are in a top ground position.",
      type: "Grappling",
    },
    {
      name: "Crafty",
      description: "Improved submission defense in bottom positions.",
      type: "Grappling",
    },
    {
      name: "Nightmare",
      description:
        "Boosts a fighters Grapple Defence whever they are in a bottom guard position.",
      type: "Grappling",
    },
    {
      name: "Like Glue",
      description:
        "Initiates, advances and counters more easily when grappling on the feet.",
      type: "Grappling",
    },
    {
      name: "Slippery",
      description:
        "Denies, escapes and counters more easily when grappling on the feet.",
      type: "Grappling",
    },
    {
      name: "To Your Feet",
      description: "Able to get up from the ground more easily.",
      type: "Grappling",
    },
    {
      name: "Slam Boost",
      description: "Power Takedowns do more damage.",
      type: "Grappling",
    },
    {
      name: "Marathoner",
      description: "Actions consume less stamina while moving.",
      type: "Health & Stamina",
    },
    {
      name: "Out the Gates",
      description: "Strikes consumes less stamina during rounds 1 and 2.",
      type: "Health & Stamina",
    },
    {
      name: "Higher Altitude",
      description: "Strikes consumes less stamina during rounds 3, 4 and 5.",
      type: "Health & Stamina",
    },
    {
      name: "Grinder",
      description: "Uses less stamina when grappling on the feet.",
      type: "Health & Stamina",
    },
    {
      name: "Work Horse",
      description: "Uses less stamina when grappling on the ground.",
      type: "Health & Stamina",
    },
    {
      name: "Recharger",
      description: "Recovers more health between rounds.",
      type: "Health & Stamina",
    },
    {
      name: "Wake Up Call",
      description: "Recovers from stuns and knockdowns more quickly.",
      type: "Health & Stamina",
    },
    {
      name: "Force of Nature",
      description:
        "Incoming damage is less effective when you have more health than the opponent.",
      type: "Health & Stamina",
    },
    {
      name: "Carved of Wood",
      description:
        "Incoming damage is less effective when you have less health than the opponent.",
      type: "Health & Stamina",
    },
  ],
  standUp: [
    { name: "Punch Speed", propName: "punchSpeed" },
    { name: "Punch Power", propName: "punchPower" },
    { name: "Accuracy", propName: "accuracy" },
    { name: "Blocking", propName: "blocking" },
    { name: "Head Movement", propName: "headMovement" },
    { name: "Footwork", propName: "footwork" },
    { name: "Switch Stance", propName: "switchStance" },
    { name: "Takedown Defence", propName: "takedownDefence" },
    { name: "Kick Power", propName: "kickPower" },
    { name: "Kick Speed", propName: "kickSpeed" },
  ],
  grappling: [
    { name: "Takedown", propName: "takedowns" },
    { name: "Top Control", propName: "topControl" },
    { name: "Bottom Control", propName: "bottomControl" },
    { name: "Submission", propName: "submissions" },
    { name: "Submission Defence", propName: "submissionDefence" },
    { name: "Ground Striking", propName: "groundStriking" },
    { name: "Clinch Striking", propName: "clinchStriking" },
    { name: "Clinch Control", propName: "clinchControl" },
  ],
  health: [
    { name: "Cardio", propName: "cardio" },
    { name: "Chin", propName: "chin" },
    { name: "Body", propName: "body" },
    { name: "Legs", propName: "legs" },
    { name: "Recovery", propName: "recovery" },
  ],
  basic: [
    { name: "Martial Art", propName: "martialArt" },
    { name: "Stance", propName: "stance" },
    { name: "Reach", propName: "reach" },
  ],
  moves: {
    punches: [
      "Jab",
      "Backfist",
      "Snap Jab",
      "Straight",
      "Looping Cross",
      "Celtic Cross",
      "Lead Hook",
      "Hook",
      "Lead Uppercut",
      "Uppercut",
      "Body Jab",
      "Body Straight",
      "Lead Body Hook",
      "Body Hook",
      "Lead Body Uppercut",
      "Body Uppercut",
      "Lead Spinning Backfist",
      "Spinning Backfist",
      "Lead Elbow",
      "Elbow",
      "Lead 6 to 12 Elbow",
      "Superman Elbow",
      "Overhand",
      "Haymaker",
      "Spinning Elbow",
      "Lead Spinning Elbow",
      "Superman Jab",
      "Superman Punch",
      "Cage Superman",
      "Side Cage Superman Punch",
      "Lead Overhand",
      "Stockton Slap",
    ],
    kicks: [
      "Lead Calf Kick",
      "Calf Kick",
      "Lead Leg Kick",
      "Leg Kick",
      "Lead Body Roundhouse",
      "Body Roundhouse",
      "Lead Roundhouse",
      "Roundhouse Kick",
      "Lead Body Side Kick",
      "Body Side Kick",
      "Lead Front Kick",
      "Front Kick",
      "Lead Body Front Kick",
      "Body Front Kick",
      "Lead Spinning Cage Kick",
      "Lead Axe Kick",
      "Lead Hook Kick",
      "Axe Kick",
      "Hook Kick",
      "Showtime Kick",
      "Lead Side Kick",
      "Ducking Roundhouse",
      "Side Kick",
      "Lead Side Leg Kick",
      "Oblique Leg Kick",
      "Body Knee",
      "Lead Body Knee",
      "Flying Knee",
      "Cage Flying Knee",
      "Lead Question Mark Kick",
      "Lead Jumping Roundhouse",
      "Question Mark Kick",
      "Jumping Roundhouse",
      "Rolling Thunder Kick",
      "Handplant Roundhouse",
      "Spinning Side Kick",
      "Lead Spinning Side Kick",
      "Body Jumping Side Kick",
      "Lead Body Switch Kick",
      "Body Spinning Side Kick",
      "Lead Body Spinning Side Kick",
      "Body Crane Kick",
      "Lead Body Crane Kick",
      "Two-Touch Spinning Side Kick",
      "Body Handplant Roundhouse",
      "Crane Kick",
      "Jumping Switch Kick",
      "Lead 360 Tornado Kick",
      "Lead Crane Kick",
      "Lead Jumping Switch Kick",
      "Cartwheel Kick",
      "Lead Flying Double Knee",
      "Lead Flying Knee",
      "Lead Spinning Heel Kick",
      "Spinning Heel Kick",
    ],
    clinch: [
      "Hooks",
      "Body Hooks",
      "Uppercuts",
      "Body Uppercuts",
      "Elbows",
      "Knees to Head",
      "Knees to Body",
      "Knees to Leg",
      "Lead Collar Tie",
    ],
    takedowns: [
      "Osoto-Gari Trip",
      "Single Leg",
      "Double Leg",
      "Power Single Leg",
      "Power Double Leg",
      "Wrestling",
      "BJJ/Judo",
    ],
    ground: {
      groundMovements: ["BJJ", "Wrestle"],
      strikes: [
        "Straights",
        "Hook",
        "Body Hook",
        "Body Knee",
        "Elbow",
        "Body Straights",
        "Uppercuts",
      ],
    },
    submissions: [
      "Armbars",
      "Guillotines",
      "Leg Locks",
      "Unorthodox Chokes",
      "Shoulder Locks",
      "Orthodox Chokes",
      "Leg Chokes",
      "Imanari Roll",
    ],
    combos: ["Boxing", "Kickboxing", "Muay Thai", "Traditional"],
  },
};

export default standard;
