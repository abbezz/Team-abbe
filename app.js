const express = require('express');
const { engine } = require('express-handlebars')
const session = require("express-session");
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const bodyParser = require('body-parser');
const methodOverride = require('method-override')


const path = require('path');
const db = require('./models');

require('dotenv').config();

const initializePassport = require('./passport-config')
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)


const users = []


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
app.use(express.urlencoded({ extended: false }));






// Landing page

app.get('/', (req, res) => {
  res.render('index');

});
/////////////////Login

app.get('/login', (req, res) => {
  res.render('login');

});

app.post('/login', (req, res) => {

})

app.get('/register', (req, res) => {
  res.render('register');

});

app.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })
    res.redirect('/login')
  } catch {
    res.redirect('/register')
  }
 
})

// Hadith

app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))


app.get('/hadith', (req, res) => {
  res.render('hadith');

});

app.get('/search', (req, res) => {
  res.render('search');



});


app.get('/touch', (req, res) => {
  res.render('touch');

});


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));