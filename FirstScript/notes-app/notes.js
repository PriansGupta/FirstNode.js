const { default: chalk } = require("chalk");
const fs = require("fs");
const { load } = require("signal-exit");

const getNotes = function () {
  const msg = "your notes";
  return msg;
};

debugger

const AddToFile = (notes) => {
  const stringFy = JSON.stringify(notes);
  fs.writeFileSync("Notes.json", stringFy);
};

const ReadNote=(title)=>{
const notes=loadNotes();
const Data=notes.filter((note)=>note.title===title)

if(Data.length===0)
console.log(chalk.red.inverse("Item not Found!!"))

else
console.log(chalk.green.inverse("The Body is: "+Data[0].body))

}

const AddNotes = (title, body) => {
  const notes = loadNotes();
  const check = notes.find((note) => note.title === title);
  if (!check) {
    notes.push({
      title: title,
      body: body,
    });
  }

  AddToFile(notes);
};

const RemoveNote = (title) => {
  const notes = loadNotes();

  const DuplicateNotes = notes.filter((note) => {
    return note.title !== title;
  });

  if (DuplicateNotes.length == notes.length)
    console.log(chalk.red("Item not Present"));
  else console.log(chalk.green("Removed"));

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
  ReadNote:ReadNote,
};
