// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

//const Movie = require("../models/Movie.model");

// all your routes here
router.get("/create", (req, res, next) => {
  res.render("movies/new-movie");
});

router.post("/create", (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
  }

  res.render("movies/new-movie");
});

module.exports = router;
