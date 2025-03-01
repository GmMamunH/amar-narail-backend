const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  images: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("News", newsSchema);
