const express = require('express');
const handlebars = require('express-handlebars');
const session = require("express-session");
const bodyParser = require('body-parser');



const path = require('path');
const db = require('./models');

require('dotenv').config();

// Get the table
(async () => {
    await db.sequelize.sync();
})();

app.set('view engine', 'hbs');

app.engine('hbs', handlebars({
  layoutsDir: `$(__dirname}/views/layouts`,
  extname: 'hbs',
  defaultLayout: 'index'
}));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('main');

});

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));