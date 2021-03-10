const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    email: {type: String, required: true},
});

UserSchema.methods.getToken = async function(){
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: Math.floor(Date.now() / 1000) + (60 * 60) });
}

const User = mongoose.model("user", UserSchema);

module.exports = User;
