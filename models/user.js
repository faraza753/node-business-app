const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    }
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id}, config.get('jwtPrivateKey'));
    return token;
}
const User = mongoose.model('User', userSchema);


exports.User = User;
