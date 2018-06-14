const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('localhost/listnews', (err) => {
    if(err) {
        console.log('connect db-listnews error', err)
    } else {
        console.log('connect db-listnews success');
    }
});

const Note = require('./models/Note');

const app = express();

app.use( bodyParser.json() );

app.get('/', (req, res) => {
    Note.count().then(result => {
        console.log('result', result);
    });
    res.send('<h4>It is response when you request GET!!!</h4>');
});
app.post('/post', (req, res) => {
    res.json(req.body)
});

app.listen(8080, (err) => {
    if(!err) {
        console.log(`We are listen port 8080`)
    }
});
