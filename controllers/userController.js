const bcrypt = require('bcrypt');
const _ = require('lodash');
const {User} = require('../models/user');


const addUser = async (req, res, next) => {
 

    let user = await User.findOne({email: req.body.email}).exec();
    if(user) return res.status(400).send('User with this email already exist');

    user  = new User(_.pick(req.body, ['name', 'email', 'password']));

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.password, salt);
    (await user).save();
    const token = user.generateAuthToken();
    res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email']));
}

module.exports = {
    addUser
}