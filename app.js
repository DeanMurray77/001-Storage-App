const express = require('express');
const app = express();

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);

app.get('/', function(req, res) {
    res.send('It\'s Alive');
}).listen(PORT);

console.log("Waiting for requests. got to http://localhost:5000");