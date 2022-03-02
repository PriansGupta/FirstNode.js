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
yargs.command({
    command:'read',
    describe:'reading notes',
    handler: ()=>{
        console.log("Reading notes!")
    }
})

console.log(yargs.argv)

// git add ./
// git commit -m "Node"
// git push origin main