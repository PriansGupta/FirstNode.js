const fs = require("fs");

const getNotes = function () {
  const msg = "your notes";
  return msg;
};

const AddToFile = (notes) => {
  const stringFy = JSON.stringify(notes);
  fs.writeFileSync("Notes.json", stringFy);
};
const loadNotes = () => {
    fs.writeFileSync('Notes.json',[])
  try {
    const scramble = fs.readFileSync("Notes.json");
    const str = scramble.toString();
    return JSON.parse(str);
  } catch (e) {
    return [];
  }
};
const AddNotes = (title, body) => {
  const notes = loadNotes();

  const newNote = {
    title: title,
    body: body,
  };

  notes.push(newNote);

  AddToFile(notes);
};

module.exports = {
  getNotes: getNotes,
  AddNotes: AddNotes,
};
