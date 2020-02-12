const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 16
  },
  odots: [
    {
      type: Schema.Types.ObjectId,
      ref: "odot"
    }
  ]
});

module.exports = mongoose.model("user", UserSchema);