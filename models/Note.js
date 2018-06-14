const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title : String,
    text : String,
    color : String
});

export const Note = mongoose.model('Note', NoteSchema);