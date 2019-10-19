const fs = require('fs');
const chalk = require('chalk');



const getNotes = () => {
    return 'Your Notes...';
}
//Creating of adding command to add data to JSON file 'notes.json'
const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);
    

    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title;
    // })

    if(!duplicateNote){
    notes.push({
        title: title,
        body: body
    });
    console.log(chalk.green.inverse('New note added!'));
    saveNotes(notes);
    } else { 
        console.log(chalk.red.inverse('Note title taken!'));
    }
}

const readNote = (title) =>{
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);

    if (note) {
        console.log(chalk.yellow.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse('Note not found'));
    }
}


const saveNotes = (notes) =>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}


const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } 
    catch (e) {
        return [];
    } 
}

//Creating of adding command to add data to JSON file 'notes.json'
const removeNotes = function(title){
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => {
        
        return note.title !== title;
        
    })

    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed'));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.red.inverse('Not note found'));
    }
}

const listNotes = ()=> {
    const notes = loadNotes();

    console.log(chalk.blue.inverse('Your Notes'));

    notes.forEach((note) => {
        console.log(note.title);
        
    });
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
}
