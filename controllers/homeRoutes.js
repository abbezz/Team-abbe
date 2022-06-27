
const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// this will put the select (homepage) page on home

router.get('/', async (req, res) => {
  try {
  // Pass serialized data and session flag into template
    res.render('select',  {  
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }

});

// if you want the 'select page'
router.get("/select", (req, res) => {
  res.render('select');
});

// when you go to the signup page, if youre logged in, go to profile page..CHANGE
router.get('/signUp', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('signUp');
});


//  give me the history page if not logged in go to sign up page
router.get('/history', (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/signUp');
    return;
  }
  res.render('history');
});

// give me the progress page if not logged in go to sign up page
router.get('/progress', (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/signUp');
    return;
  }
  res.render('progress');
});

//  give me the dashboard page if not logged in go to sign up page
router.get('/dashboard', (req, res) => {

  if (!req.session.logged_in) {
    res.redirect('/signUp');
    return;
  }
  res.render('dashboard', 
  // {db_data: mysql_data});;
// }
)});

//  give me the about me page
router.get('/aboutme', (req, res) => {
  res.render('aboutme');
});


router.get('/profile', (req, res) => {
  res.render('profile');
});

// Dan's routes
router.get('/createNewExercise', (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/signUp');
    return;
  }
  res.render('createNewExercise')
})

// sumaya routes //
router.get('/newWorkout', (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/signUp');
    return;
  }
  res.render('newWorkout');
});

router.get('/followPlan', (req, res) => {

  res.render('followPlan');
});



module.exports = router;