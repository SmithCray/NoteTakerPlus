const router = require("express").Router();
const path = require("path");

//build out HTML routes

//notes
router.get("/notes", (req, res) => {
  //i want to respond with notes.HTML
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

//index
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
