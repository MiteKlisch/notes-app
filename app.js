// const FirstName = require('./utils.js');

// console.log(FirstName);

//const validator = require('validator');

const notes = require('./notes.js');
//const chalk = require('chalk');
const yargs = require('yargs');

//Customize yargs version
yargs.version('1.1.0')


//Create add command

yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true, 
            type: 'string'
         }
    },
    
    handler(argv)  {
       notes.addNote(argv.title, argv.body);
        
    }
})

//Create remove command

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: 'Remove title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title);
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.command({
    command: 'listNotes',
    describe: 'Calling function listNotes',
    handler(){
        notes.listNotes();
    }
})

// add, remove, read, list

yargs.parse();
