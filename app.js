const express = require("express");
const cors = require("cors");

const newsRouter = require("./routers/news.route")
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/news", newsRouter);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// route not found
app.use((req, res, next) => {
  res.status(404).json({
    message: "round not found",
  });
});
// server error
app.use((error, req, res, next) => {
  res.status(500).json({
    message: "server error",
  });
});



module.exports = app;
