//create a class called store with methods that read json file,  get, add,

//native node module, that allows us access to the file system, readFile, writeFile
const fs = require("fs");
const util = require("util");

//we not can use promise objects instead of callbacks
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//es6 syntax -classes are blueprints for creating objects
class Store {
  //read method
  read() {
    return readFileAsync("db/db.json", "utf8");
  }

  getNotes() {
    return this.read().then((notes) => {
      //return the parsedNotes
    });
  }

  addNote(note) {
    //this will be code to add a note to db.json
  }

  //write the rest of your methods in this manner
}

//export a newly created object with the methods on the prototype

module.exports = new Store(); //exporting a newly create object from calling the Store class
