const express = require('express');
const { engine } = require('express-handlebars')
const session = require("express-session");
const bodyParser = require('body-parser');



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
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir:__dirname + '/views/layouts',
  partialsDir:__dirname + '/views/partials',
}));

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Body Parser
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));




// Landing page

app.get('/', (req, res) => {
  res.render('index');

});

app.get('/login', (req, res) => {
  res.render('login');

});

app.get('/hadith', (req, res) => {
  res.render('hadith');

});

app.get('/search', (req, res) => {
  res.render('search');



});


app.get('/touch', (req, res) => {
  res.render('touch');

});

app.get('/vers', (req, res) => {
  res.render('vers');

});






const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));