const { default: chalk } = require("chalk");
const fs = require("fs");
const { load } = require("signal-exit");

const getNotes = function () {
  const msg = "your notes";
  return msg;
};

const AddToFile = (notes) => {
  const stringFy = JSON.stringify(notes);
  fs.writeFileSync("Notes.json", stringFy);
};

const AddNotes = (title, body) => {
  const notes = loadNotes();

  notes.push({
    title: title,
    body: body,
  });

  AddToFile(notes);
};

const RemoveNote = (title) => {
  const notes = loadNotes();

  const DuplicateNotes = notes.filter((note) => {
    return note.title !== title;
  });

  if (DuplicateNotes.length==notes.length)
  console.log(chalk.red("Item not Present"))  
  
  else
  console.log(chalk.green("Removed"))  

    AddToFile(DuplicateNotes);
};

const loadNotes = () => {
  try {
    const scramble = fs.readFileSync("Notes.json");
    const str = scramble.toString();
    return JSON.parse(str);
  } catch (e) {
    return [];
  }
};
module.exports = {
  getNotes: getNotes,
  AddNotes: AddNotes,
  RemoveNote: RemoveNote,
};
