//Dependencies

var express = require("express");
var fs = require("fs");
var path = require('path');

//Sets up the Express app

var app = express();
var PORT = 8000;

app.listen(PORT, () => {console.log(`Your app is listening on port:${PORT}`) })

//Sets up Express app to hanld data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//Routes

//HTML
//HTML route: get notes to return notes.html
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'Develop/public/index.html')));
//HTML route: get * to return index.html
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'Develop/public/notes.html')));

//API
//API route: GET /api/notes should read db.json
app.get('/api/notes', (req, res) => res.sendFile(path.join(__dirname, 'db.json')));
//API route: POST /api/notes
app.post('/api/notes', (req, res) => res.sendFile(path.join(__dirname, 'db.json')));








// //MOST OF YOUR ROUTE CODE WILL LIVE INSIDE HERE 