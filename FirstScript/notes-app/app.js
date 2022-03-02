const validator = require("validator");
const add = require("./utils");
const chalk = require("chalk");

console.log(chalk.green("Success!!!"));
console.log(chalk.yellow.inverse("Fuck You"));
const sum = add(4, 6);
console.log(sum);
