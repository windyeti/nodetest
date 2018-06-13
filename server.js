const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h4>It is response when you request GET!!!</h4>');
});

app.listen(8080, (err) => {
    if(!err) {
        console.log(`You are listen port 8080`)
    }
});
