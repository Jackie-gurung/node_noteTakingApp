const chalk = require('chalk');
const yargs = require('yargs');
const Notes = require('./notes');

// create add command
yargs.command({
    command:'add',
    describe:'Add a new notes',
    builder: {
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'note body',
            demandOption:true,
            type:'string'
        }
    },
    handler (argv){
        Notes.addNotes(argv.title,argv.body)
    }
})

// create remove command 
yargs.command({
    command:'remove',
    describe:'removes a notes', 
    builder: {
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }
    },  
    handler(argv) {
        Notes.removeNotes(argv.title)
    }
})

// create list command 
yargs.command({
    command:'list',
    describe:'lists all the available notes',
    handler(){ 
        Notes.listNotes()
    }
})

// create read command 
yargs.command({
    command:'read', 
    describe:'reads a notes',
    builder: {
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }
    }, 
    handler(argv) {
        Notes.readNotes(argv.title);
    }
})

yargs.parse();

// console.log(process.argv);
// console.log(yargs.argv);

// COMMANDS
// node app add --title="jackie" --body="this is cool"