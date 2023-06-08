function initialise(mongoose, DATABASE_URL) {
  mongoose.connect(DATABASE_URL);
  const db = mongoose.connection;
  db.on("error", (err) => console.error(err));
  db.once("open", () => console.log("Connected to DB."));
}

module.exports = initialise;
