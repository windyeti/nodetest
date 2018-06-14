const mongoose = require('mongoose');

const getConnection = () => {
    return mongoose.connect('localhost:8080/note')
};
const NoteSchema = mongoose.Schema({
    title : String,
    text : String,
    color : String
});

const Note = mongoose.model('Note', NoteSchema);