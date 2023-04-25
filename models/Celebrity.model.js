//  Add your code here
const { Schema, model } = require("mongoose");

const celebritySchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  occupation: {
    type: String,
    enum: ["actor", "singer", "comedian", "unknown"],
  },
  catchPhrase: {
    type: String,
    default: "I am super famous b*!",
  },
});

const Celebrity = model("celebrities", celebritySchema);

module.exports = Celebrity;
