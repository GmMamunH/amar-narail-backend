const News = require("../models/news.model");

// create new posts
const createNews = async (req, res) => {
  try {
    const newPost = new News({
      title: req.body.title,
      content: req.body.content,
      images: req.body.images,
      author: req.body.author,
    });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).send(err.message);
  }
};
// get all posts
const getAllNews = async (req, res) => {
  try {
    const allPost = await News.find();
    console.log(allPost);
    res.status(200).json(allPost);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// get single post by id
const getOneNews = async (req, res) => {
  try {
    const onePost = await News.findById(req.params.id);
    if (!onePost) return res.status(404).send("News not found");
    res.status(200).json(onePost);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// update post by id
const updateNews = async (req, res) => {
  try {
    const updateNews = await News.findByIdAndUpdate(req.params.id);
    updateNews.title = req.body.title;
    updateNews.content = req.body.content;
    updateNews.images = req.body.images;
    updateNews.author = req.body.author;
    await updateNews.save();
    if (!updateNews) return res.status(404).send("News not found");

    res.status(200).json(updateNews);
  } catch (err) {}
};

// delete post by id
const deleteNews = async (req, res) => {
  try {
    const deleteOneNews = await News.findByIdAndDelete(req.params.id);
    if (!deleteOneNews) return res.status(404).send("News not found");
    res.status(200).json({ message: "News deleted successfully" });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { getAllNews, getOneNews, createNews, deleteNews, updateNews };
