const mongoose = require('mongoose');

const Note = require('../models/Note');

const getDbConnect = () => {
    mongoose.connect('mongodb://localhost/listnews', (err) => {
        if(err) {
            console.log('connect db-listnews error', err)
        } else {
            console.log('connect db-listnews success');
        }
    });
};

const getNotes = () => {
    return Note.find()
};

const createNote = (data) => {
    const note = new Note({
        title : data.title,
        text : data.text,
        color : data.color
    });
    return note.save();
};

const deleteNote = (id) => {
    return Note.findById(id).remove()
}

module.exports = {
    getDbConnect,
    createNote,
    getNotes,
    deleteNote
};