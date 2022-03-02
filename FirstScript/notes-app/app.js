// const validator = require("validator");
// const add = require("./utils");
const chalk = require("chalk");
const notes = require("./notes");

const command = process.argv[2];
console.log(command);
if (command === "add") console.log("Adding");
else console.log("Removing");
// console.log(chalk.green("Success!!!"));
// console.log(chalk.yellow.inverse("Fuck You"));
// const sum = add(4, 6);
// console.log(sum);
