const express = require('express');
const app = express();
const path = require('path');

//Using "static" folder

app.use('/static', express.static(path.join(__dirname, 'static')));

//Sending the html file

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.listen(3000);