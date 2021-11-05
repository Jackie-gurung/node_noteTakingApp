const fs = require('fs');
const chalk = require('chalk');


const addNotes = (title,body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.find(note => note.title === title)
    debugger

    if(!duplicateNotes){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('Notes added!'));
    }else{
        console.log(chalk.red.inverse('Title Taken!'));
    }
}
 
const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json') 
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch (e){
        return []
    }   
}

const removeNotes = title => {
    console.log("removing notes with title : " + title);
    const notes = loadNotes();
    const filteredNotes = notes.filter(note => note.title !== title)
    if(filteredNotes.length === notes.length) {
        console.log(chalk.red.inverse("Notes not found"));
    }else{
        saveNotes(filteredNotes);
        console.log(chalk.green.inverse('Notes removed!'));
    }
}

const listNotes = () => {
    
    console.log(chalk.inverse('-------Your notes--------'));
    const listData = loadNotes();
    listData.forEach((data) => console.log(data.title));
}

const readNotes = title => {
    const notes = loadNotes();
    const noteToRead = notes.find(note => note.title === title);
    if(noteToRead){
        console.log(chalk.inverse(noteToRead.title))
        console.log(noteToRead.body)
    }else{
        console.log(chalk.red.inverse("Notes not found.!"))
    }
}

module.exports = {
    addNotes: addNotes,
    removeNotes : removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
} 