const fs = require("fs");
const chalk = require("chalk");
const success = chalk.green.bold;
const error = chalk.red.bold;

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataString = dataBuffer.toString();
    return JSON.parse(dataString);
  } catch (error) {
    return [];
  }
};

const saveNotes = (notes) => {
  const noteString = JSON.stringify(notes);
  fs.writeFileSync("notes.json", noteString);
};

module.exports = {
  addNote: (newNote) => {
    const notes = loadNotes();
    const duplicate = notes.filter((note) => note.title === newNote.title);

    debugger;
    if (duplicate.length === 0) {
      notes.push(newNote);
      saveNotes(notes);
      console.log(success("Success: note created"));
    } else {
      console.log(error("Error: the title is taken"));
    }
  },
  removeNote: (title) => {
    const notes = loadNotes();
    const filteredNotes = notes.filter((item) => item.title !== title);

    if (notes.length > filteredNotes.length) {
      saveNotes(filteredNotes);
      console.log(success("Success: Note removed"));
    } else {
      console.log(error("Error: No note found"));
    }
  },
  listNote: () => {
    const notes = loadNotes();
    console.log(success("Your notes:"));
    notes.forEach((note) => console.log("- " + chalk.bold(note.title)));
  },
};
