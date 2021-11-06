const mongoose = require("mongoose");

const { Schema } = mongoose;

const favoriteSchema = new Schema({
  name: String,

  ticker: String,

  price: Number,

  hourPercentChange: Number,

  dayPercentChange: Number,

  weekPercentChange: Number,

  volume: Number,

  marketCap: Number,

  logoURL: String,
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;
