const mongoose = require("mongoose");

const fighterSchema = new mongoose.Schema({
  _id: Number,
  weightClass: {
    type: String,
    require: true,
  },
  rank: {
    type: String,
    require: true,
  },
  firstName: {
    type: String,
    require: true,
  },
  nickname: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  basic: {
    level: {
      type: Number,
      require: true,
    },
    skills: {
      martialArt: {
        type: String,
        require: true,
      },
      stance: {
        type: String,
        require: true,
      },
      reach: {
        type: Number,
        require: true,
      },
    },
  },
  perks: [
    {
      name: {
        type: String,
        require: true,
      },
      description: {
        type: String,
        require: true,
      },
      type: {
        type: String,
        require: true,
      },
    },
  ],
  standUp: {
    level: {
      type: Number,
      require: true,
    },
    skills: {
      punchSpeed: {
        type: Number,
        require: true,
      },
      punchPower: {
        type: Number,
        require: true,
      },
      accuracy: {
        type: Number,
        require: true,
      },
      blocking: {
        type: Number,
        require: true,
      },
      headMovement: {
        type: Number,
        require: true,
      },
      footwork: {
        type: Number,
        require: true,
      },
      switchStance: {
        type: Number,
        require: true,
      },
      takedownDefence: {
        type: Number,
        require: true,
      },
      kickPower: {
        type: Number,
        require: true,
      },
      kickSpeed: {
        type: Number,
        require: true,
      },
    },
  },
  grappling: {
    level: {
      type: Number,
      require: true,
    },
    skills: {
      takedowns: {
        type: Number,
        require: true,
      },
      topControl: {
        type: Number,
        require: true,
      },
      bottomControl: {
        type: Number,
        require: true,
      },
      submissions: {
        type: Number,
        require: true,
      },
      submissionDefence: {
        type: Number,
        require: true,
      },
      groundStriking: {
        type: Number,
        require: true,
      },
      clinchStriking: {
        type: Number,
        require: true,
      },
      clinchControl: {
        type: Number,
        require: true,
      },
    },
  },
  health: {
    level: {
      type: Number,
      require: true,
    },
    skills: {
      cardio: {
        type: Number,
        require: true,
      },
      chin: {
        type: Number,
        require: true,
      },
      body: {
        type: Number,
        require: true,
      },
      legs: {
        type: Number,
        require: true,
      },
      recovery: {
        type: Number,
        require: true,
      },
    },
  },
  moves: {
    punches: [
      {
        name: {
          type: String,
          require: true,
        },
        level: {
          type: Number,
          require: true,
        },
      },
    ],
    kicks: [
      {
        name: {
          type: String,
          require: true,
        },
        level: {
          type: Number,
          require: true,
        },
      },
    ],
    clinch: [
      {
        name: {
          type: String,
          require: true,
        },
        level: {
          type: Number,
          require: true,
        },
      },
    ],
    takedowns: [
      {
        name: {
          type: String,
          require: true,
        },
        level: {
          type: Number,
          require: true,
        },
      },
    ],
    ground: {
      getups: [
        {
          name: String,
          level: Number,
        },
      ],
      transitions: [
        {
          name: String,
          level: Number,
        },
      ],
      reversals: [
        {
          name: String,
          level: Number,
        },
      ],
      sweeps: [
        {
          name: String,
          level: Number,
        },
      ],
    },
    submissions: [
      {
        name: {
          type: String,
          require: true,
        },
        level: {
          type: Number,
          require: true,
        },
      },
    ],
    combos: [
      {
        name: {
          type: String,
          require: true,
        },
        level: {
          type: Number,
          require: true,
        },
      },
    ],
  },
});

module.exports = mongoose.model("Fighter", fighterSchema);
