const mongoose = require("mongoose");
const config = require("./config");

const dbURL = config.db.url;

mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => {
    console.error("❌ Could not connect to MongoDB:", err.message);
    process.exit(1);
  });
