const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const db = require('./db');

app.use( bodyParser.urlencoded({extended : true}) );
app.use( bodyParser.json() );

db.getDbConnect();

app.get('/form', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.send('<form method="post" action="/form">' +
        '<input type="text" name="title">' +
        '<input type="text" name="text">' +
        '<input type="text" name="color">' +
        '<input type="submit" value="Отправить">' +
        '</form>')
});
app.get('/', (req, res) => {
    res.status(200);
    db.getNotes().then(notes => {
        res.json(notes);
    })
});
app.post('/form', (req, res) => {
    console.log('запрос POST');
    db.createNote(req.body).then(newNote => {
        res.send(req.body);
    })
});

app.listen(8080, (err) => {
    if(!err) {
        console.log(`We are listen port 8080`)
    }
});
