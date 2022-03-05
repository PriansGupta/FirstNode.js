const yargs = require("yargs");
const chalk = require("chalk");
const notes = require("./notes");
const { string } = require("yargs");

yargs.command({
  command: "add",
  describe: "Add new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "This is the body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    console.log("Title: " + argv.title);
    console.log("Body: "+argv.body)
  },
});
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: () => {
    console.log("Removing a Note!!");
  },
});
yargs.command({
  command: "list",
  describe: "Listing notes",
  handler: () => {
    console.log("Listing notes!!");
  },
});
yargs.command({
  command: "read",
  describe: "reading notes",
  handler: (argv) => {
    console.log("Reading notes!");
  },
});

yargs.parse();

// git add ./
// git commit -m "Node"
// git push origin main
