//Imports
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

//Local Import
const Fighter = require("./fighter");
const initialiseMongoose = require("./mongoose-config");
initialiseMongoose(mongoose, process.env.DATABASE_URL);

//Middleware
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

app.get("/fighters", async (req, res) => {
  try {
    const fighters = await Fighter.find();
    res.json(fighters);
  } catch (err) {
    console.log(err);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
