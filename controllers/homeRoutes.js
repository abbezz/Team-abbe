const router = require("express").Router();
const { User, BlogPost, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const posts = await BlogPost.findAll({
      include: [User],
    });

    const postData = posts.map((post) => post.get({ plain: true }));
    res.render("homepage", {
      postData,
      user_id: req.session.user_id,
    });
  } catch (err) {
    console.log(err);
  }
});

router.get("/posts/:id", async (req, res) => {
  try {
    const postData = await BlogPost.findByPk(req.params.id, {
      include: [
        {
          model: User,
        },
        {
          model: Comment,
        }
      ],
    });

    const posts = postData.get({ plain: true });
    console.log(posts, "received")
    res.render("posts", {
      posts,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//  give me the dashboard page if not logged in go to sign up page
router.get('/hadith', (req, res) => {

  if (!req.session.logged_in) {
    res.redirect('/signUp');
    return;
  }
  res.render('hadith', 
  // {db_data: mysql_data});;
// }
)});





router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
  }
  res.render("login");
});

module.exports = router;