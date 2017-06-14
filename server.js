const express = require('express');
let app = express();

app.use('/', express.static(__dirname + '/dist'));

app.get('/', (req,res) => {
    res.sendFile('index.html');
});



app.listen('3001', () => console.log('listening to 3001'));