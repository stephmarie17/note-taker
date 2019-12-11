// Dependencies
const express = require("express");

// Set up Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Server listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  