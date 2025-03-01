const express = require("express");
const router = express.Router();
const {
  getAllNews,
  getOneNews,
  createNews,
  deleteNews,
  updateNews,
} = require("../controllers/news.controller");

router.post("/", createNews);
router.get("/", getAllNews);
router.get("/:id", getOneNews);
router.patch("/:id", updateNews);
router.delete("/:id", deleteNews);

module.exports = router;
