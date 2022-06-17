const express = require('express');
const { engine } = require('express-handlebars')
const session = require("express-session");
const bodyParser = require('body-parser');
const Handlebars = require("handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");




const path = require('path');
const db = require('./models');

require('dotenv').config();

// Get the table
(async () => {
    await db.sequelize.sync();
})();

const app = express();
app.set('view engine', 'hbs');

app.engine('hbs', engine({
  layoutsDir: `${__dirname}/views/layouts`,
  extname: 'hbs',
  defaultLayout: 'index'
}));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('main');

});


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));