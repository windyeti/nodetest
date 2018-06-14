const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title : String,
    text : String,
    color : String
});

// const Schema = mongoose.Schema;
//
// const NoteSchema = new Schema({
//     title : String,
//     text : String,
//     color : String
// });

module.exports = mongoose.model('Note', NoteSchema);