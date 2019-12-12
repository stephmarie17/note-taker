const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

function getFileData() {
    return readFileAsync('./db/db.json', 'utf8')
    .then(data => JSON.parse(data).data);
}

function writeFileData(data) {
    return writeFileAsync('./db/db.json', JSON.stringify({data}));
}

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        getFileData().then(function(data){
            res.json(data);
        })
        .catch(function(err){
            console.log(err);
        });
    });

    // Create new note
    app.post("/api/notes", async function(req, res) {
        try {
        var data = await getFileData()
        data.push(req.body);
        await writeFileData(data)
        res.json({success: true}); 
        }
        catch(e){
            console.log(e);
        }
    }); 
    app.delete("/api/notes/:id", async function(req, res) {
        try {
        var data = await getFileData()
        //TODO: find by ID and remove from array
        //req.params.id
        var newData = data.filter(function(note) {
            return note.id !== req.params.id;
        });
        await writeFileData(newData)
        res.json({success: true}); 
        }
        catch(e){
            console.log(e);
        }
    }); 
};

