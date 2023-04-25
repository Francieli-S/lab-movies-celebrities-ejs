//  Add your code here
const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  genre: {
    type: String,
  },
  plot: {
    type: String,
  },
  cast: {
    type: [mongoose.Types.ObjectId],
    ref: "Celebrity",
  },
});

const Movie = model("movie", movieSchema);

module.exports = Movie;
