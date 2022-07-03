const express = require("express");
const router = require('express').Router();
var exphbs = require("express-handlebars");
const { User } = require('../models');
const Sequelize = require("sequelize");
const withAuth = require('../utils/auth');


// router.get("/", (req, res) => {
//   res.render("index");
// });

router.get("/", async (req, res) => {
  try {
    // Get all gigs and JOIN with user data
    const gigsData = await my-express-app.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    // Serialize data so the template can read it
    const gigs = gigsData.map((gig) => gig.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("index", {
      gigs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get gig list
router.get("/allGigs", (req, res) => {
  Gig.findAll()
    .then((gigs) =>
      res.render("gigs", {
        gigs,
        logged_in: req.session.logged_in,
      })
    )
    .catch((err) => console.log(err));
});

// Display add gig form
router.get("/addGigs", (req, res) => {
  // if (!req.session.logged_in) {
  //   res.redirect('/login');
  //   return;
  // }
  res.render("add", {
    logged_in: req.session.logged_in,
  });
});

// Search for gigs

router.get("/search", (req, res) => {
  let { term } = req.query;

  term = term.toLowerCase();

  Gig.findAll({ where: { technologies: { [Op.like]: "%" + term + "%" } } })
    .then((gigs) => res.render("search", { gigs }))
    .catch((err) => console.log(err));
});

// Login route
router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;