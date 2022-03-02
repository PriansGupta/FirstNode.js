const yargs = require("yargs");
const chalk = require("chalk");
const notes = require("./notes");

yargs.command({
    command:'add',
    describe:'Add new note',
    handler: ()=>{
        console.log("Adding a new Note!!")
    }
})
yargs.command({
    command:'remove',
    describe:'Remove a note',
    handler: ()=>{
        console.log("Removing a Note!!")
    }
})
yargs.command({
    command:'list',
    describe:'Listing notes',
    handler: ()=>{
        console.log("Listing notes!!")
    }
})

console.log(yargs.argv);
