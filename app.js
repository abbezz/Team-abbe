const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars')
const session = require("express-session");
const mysql = require("mysql");
const bcrypt = require('bcrypt')
const dotenv = require('dotenv');
const bodyParser = require('body-parser');



dotenv.config({ path: './.env'})

require('dotenv').config();



const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});



db.connect( (error) => {
  if(error) {
    console.log(error)
  } else {
    console.log("MYSQL Connected...")
}
})





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

// Parse JSON bodies (as sent by API clients)
app.use(express.json());



// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));
app.use('/auth', require('./routes/auth'));




const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));