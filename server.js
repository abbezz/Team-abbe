const express = require('express');
const exphbs = require('express-handlebars');
const session = require("express-session");
const bodyParser = require('body-parser');
const Handlebars = require("handlebars");


const path = require('path');
const db = require('./models');

require('dotenv').config();

// Get the table
(async () => {
    await db.sequelize.sync();
})();

//Handlebars (non Handlebars bug requires InsecurePrototypeAccess to work)
app.engine(
  "handlebars",
  exphbs.engine({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");


const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));