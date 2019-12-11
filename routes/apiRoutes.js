const notesData = require("../data/notesData");
const fs = require("fs");

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(notesData);
    });

    // Create new note
    app.post("/api/notes", function(req, res) {
        notesData.push(req.body);
        res.json(true);
        
        let data = JSON.stringify(notesData);
        fs.writeFileSync('./db/db/json', data);
    }); 
};
