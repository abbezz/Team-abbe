const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars')
const session = require("express-session");
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser');



require('dotenv').config();




//database
const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const app = express();




app.set('view engine', 'hbs');

app.engine('hbs', engine({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir:__dirname + '/views/layouts',
  partialsDir:__dirname + '/views/partials',
}));







// Landing page

app.get('/', (req, res) => {
  res.render('index');

});


app.get('/login',  (req, res) => {
  res.render('login')
})

app.get('/Login',  (req, res) => {
  res.render('Login')
})



app.get('/hadith', (req, res) => {
  res.render('hadith');

});

app.get('/search', (req, res) => {
  res.render('search');



});


app.get('/touch', (req, res) => {
  res.render('touch');

});

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

// Body Parser
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));




const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));