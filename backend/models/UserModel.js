const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const CaloriesDetailSchema = new mongoose.Schema({
    date: {type: Date, default: null},
    calories: {type: Number, default: 0}
});


const UserSchema = new mongoose.Schema({
    email: {type: String, required: true},
    weight: {type: Number, default: null},
    height: {type: Number, default: null},
    caloriesDetails: [CaloriesDetailSchema]
});

UserSchema.methods.getToken = async function(){
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: Math.floor(Date.now() / 1000) + (60 * 60) });
}

const User = mongoose.model("user", UserSchema);

module.exports = User;
