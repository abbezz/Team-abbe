const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
  });
  

exports.login = (req, res) => {
console.log(req.body);

const { name, email, password, passwordConfirm } = req.body;

db.query('SELECT email FROM users WHERE email = ?', [email], async (error, results) =>{
    if(error) {
        console.log(error);
    }
    if( results.length > 0 ) {
        return res.render('login', {
          message: 'That email is already in use'
        })
    } else if( password !== passwordConfirm) {
        return res.render('login', {
            message: 'password do not match'
          });

    }

     
    let hashedPassword = await bcrypt.hash(password, 8);
    console.log(hashedPassword);

    db.query('INSERT INTO users SET ?', {name: name, email: email, password: hashedPassword }, (error, results) => {
       if(error) {
        console.log(error);
       } else {
        console.log(results);
        return res.render('login', {
            message: 'User registered'
          });

       }
    })

    

    res.send("Form submitted");


});


}