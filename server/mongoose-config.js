function initialise(mongoose, DATABASE_URL) {
  const env = process.env.npm_lifecycle_event === "dev" ? "DEV_" : "PROD_";
  mongoose.connect(DATABASE_URL);
  const db = mongoose.connection;
  db.on("error", (err) => console.error(err));
  db.once("open", () => console.log(`Connected to ${env}DB.`));
}

module.exports = initialise;
