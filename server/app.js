// Imports
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

// Local Import
const Controller = require("./controller");
const initialiseMongoose = require("./mongoose-config");
initialiseMongoose(
  mongoose,
  process.env.npm_lifecycle_event === "dev"
    ? process.env.DEV_DATABASE_URL
    : process.env.PROD_DATABASE_URL
);

// Middleware
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")));

// Routes
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

// Create
app.post("/api/fighters", Controller.createFighter);

// Read
app.get("/api/fighters", Controller.getAllFighters);
app.get("/api/fighters/:id", Controller.getFighterById);

// Update
app.put("/api/fighters/:id", Controller.updateFighterById);

// Delete
app.delete("/api/fighters/:id", Controller.deleteFighterById);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
