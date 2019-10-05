const mongoose = require("mongoose");

//Model de um usuário
const UserSchema = new mongoose.Schema({
  email: String
});

module.exports = mongoose.model("User", UserSchema);
