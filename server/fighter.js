const mongoose = require("mongoose");

const fighterSchema = new mongoose.Schema({
  _id: Number,
  weightClass: {
    type: String,
    require: true,
  },
  rank: {
    type: Number,
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
    skills: [
      {
        name: {
          type: String,
          require: true,
        },
        level: {
          type: mongoose.Schema.Types.Mixed,
          require: true,
        },
      },
    ],
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
    skills: [
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
  grappling: {
    level: {
      type: Number,
      require: true,
    },
    skills: [
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
  health: {
    level: {
      type: Number,
      require: true,
    },
    skills: [
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
