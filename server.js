const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use( bodyParser.json() );

app.get('/', (req, res) => {
    res.send('<h4>It is response when you request GET!!!</h4>');
});
app.post('/post', (req, res) => {
    res.json(req.body)
});

app.listen(8080, (err) => {
    if(!err) {
        console.log(`You are listen port 8080`)
    }
});
