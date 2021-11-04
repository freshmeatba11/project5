const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 255,
  },
  googleID: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  thumbnail: {
    type: String,
  },

  // local login
  email: {
    type: String,
  },
  password: {
    type: String,
    minLegth: 8,
    maxLength: 1024,
  },
});

// module.exports = mongoose("User", userSchema);
module.exports = mongoose.model("User", userSchema);
