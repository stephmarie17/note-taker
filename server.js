// Dependencies
const express = require("express");
const path = require("path");

// Set up Express app
const app = express();
const PORT = 3000;

// Data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
    console.log('Running index.html');
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
    console.log('Running notes.html');
});

app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./db/db.json"));
})

// Create new note
app.post("/api/notes", function(req, res) {

})

// Server listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  