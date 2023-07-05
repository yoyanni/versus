// Local Import
const Fighter = require("./fighter");

// Create
exports.createFighter = async (req, res) => {
  try {
    const lastId = await Fighter.findOne({}, "id").sort({ _id: -1 });
    req.body._id = ++lastId.id;
    await Fighter.create(req.body);
    const fighters = await Fighter.find()
    res.status(201).json(fighters);
  } catch (err) {
    res.status(500).json({ error: "Failed to create fighter." });
  }
};

// Read
exports.getAllFighters = async (req, res) => {
  try {
    const fighters = await Fighter.find();
    res.json(fighters);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch fighters." });
  }
};

exports.getFighterById = async (req, res) => {
  try {
    const fighter = await Fighter.findById(req.params.id);
    if (!fighter) {
      return res.status(404).json({ error: "Fighter not found." });
    }
    res.json(fighter);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch fighter." });
  }
};

// Update
exports.updateFighterById = async (req, res) => {
  try {
    const updatedFighter = await Fighter.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedFighter) {
      return res.status(404).json({ error: "Fighter not found." });
    }
    const fighters = await Fighter.find();
    res.json(fighters);
  } catch (err) {
    res.status(500).json({ error: "Failed to update fighter." });
  }
};

// Delete
exports.deleteFighterById = async (req, res) => {
  try {
    const deletedFighter = await Fighter.findByIdAndRemove(req.params.id);
    if (!deletedFighter) {
      return res.status(404).json({ error: "Fighter not found." });
    }
    res.json(deletedFighter);
  } catch (err) {
    res.status(500).json({ error: "Failed to delete fighter." });
  }
};
