const yargs = require("yargs");
const search = require("./Search");

yargs.command({
  command: "search",
  describe: "Searching the Temperature",
  builder: {
    title: {
      describe: "City name",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    search.Search(argv.title);
  },
});

yargs.parse();