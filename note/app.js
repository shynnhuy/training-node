const chalk = require("chalk");
const yargs = require("yargs");
const { addNote, removeNote, listNote } = require("./note");

yargs.version("0.0.1");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    title: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: ({ title, body }) => {
    addNote({
      title,
      body,
    });
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: ({ title }) => {
    removeNote(title);
  },
});

yargs.command({
  command: "list",
  describe: "List all notes",
  handler: () => {
    listNote();
  },
});

yargs.command({
  command: "read",
  describe: "Read a note",
  handler: () => {
    console.log("Reading a note");
  },
});

yargs.parse();
// console.log(yargs.argv);
