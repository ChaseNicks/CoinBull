const mongoose = require("mongoose");

const { Schema } = mongoose;

const favoriteSchema = new Schema({
  name: { type: String },

  ticker: { type: String },

  price: { type: Number },

  hourPercentChange: { type: Number },

  dayPercentChange: { type: Number },

  weekPercentChange: { type: Number },

  volume: { type: Number },

  marketCap: { type: Number },

  logoURL: { type: String },
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;
