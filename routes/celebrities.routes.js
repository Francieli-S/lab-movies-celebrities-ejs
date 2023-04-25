// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

const Celebrity = require("../models/Celebrity.model");

// all your routes here
router.get("/create", (req, res, next) => {
  res.render("celebrities/new-celebrity");
});

router.post("/create", async (req, res, next) => {
  try {
    const newCelebrity = await Celebrity.create({
      ...req.body,
    });
    console.log(newCelebrity);
    res.redirect("/celebrities");
  } catch (error) {
    console.log(error);
    res.render("celebrities/new-celebrity");
  }
});

router.get("/", async (req, res, next) => {
  try {
    const allCelebrities = await Celebrity.find();
    console.log(allCelebrities);
    res.render("celebrities/celebrities", { allCelebrities });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
