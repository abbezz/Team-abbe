const router = require("express").Router();
const req = require("express/lib/request");
const { User, BlogPost } = require("../models");
const withAuth = require("../utils/auth");


router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await BlogPost.findAll({
      include: [User],
      where: { user_id: req.session.user_id },
    });

    const posts = userData.map((post) => post.get({ plain: true }));

    res.render("forum", {
      posts,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;