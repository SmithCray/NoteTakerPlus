const router = require("express").Router();
const db = require("../db/db.json");

// `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
//  /api/notes
router.get("/notes", (req, res) => {
  //store.getNotes().then((notes) => {
  // return res.json(notes);
  console.log(db);
  res.send(db);
  //});
});

// /api/notes
router.post("/notes", (req, res) => {
  store.addNote(req.body).then((note) => res.json(note)); //data will be stored that comes in from the front end on req.body
});

//create routes that get notes, post notes, delete(bonus)

module.exports = router;
