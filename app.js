const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

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
    handler: function (argv){
        console.log('title: ' + argv.title);
        console.log('body: ' + argv.body);

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
    handler: function (){
        console.log('Removing a notes...')
    }
})

// create list command 
yargs.command({
    command:'list',
    describe:'lists all the available notes',
    handler: function (){
        console.log('Listing all the notes...');
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
    handler: function (){
        console.log('Reads a particular notes...')
    }
})

yargs.parse();

// console.log(process.argv);
// console.log(yargs.argv);

// COMMANDS
// node app add --title="jackie" --body="this is cool"