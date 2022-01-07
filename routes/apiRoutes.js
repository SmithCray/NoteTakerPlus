const router = require("express").Router();
const db = require("../db/db.json");
const fs = require("fs");

// `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
//  /api/notes
router.get("/notes", (req, res) => {
  //store.getNotes().then((notes) => {
  // return res.json(notes);
  console.log(db);
  fs.readFile("./db/db.json", (err, data) => {
    if (err) throw err;
    res.send(data);
  });

  //});
});

// /api/notes
router.post("/notes", (req, res) => {
  // store.addNote(req.body).then((note) => res.json(note)); //data will be stored that comes in from the front end on req.body
  fs.readFile("./db/db.json", (err, data) => {
    if (err) throw err;
    const dbData = JSON.parse(data);
    dbData.push(req.body);
    //console.log(dbData);
    fs.writeFile("./db/db.json", JSON.stringify(dbData), (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
      //console.log(db);
      res.json(dbData);
    });
  });
});

//create routes that get notes, post notes, delete(bonus)

module.exports = router;
