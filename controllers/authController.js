const validator = require("validator")
const bcrypt = require('bcrypt');
const {User} = require('../models/user');


const login = async (req, res, next) => {


    const user = await User.findOne({email: req.body.email}).exec();
    if(!user) return res.status(404).json({error:'Invalid email'});

    const validPassword= await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(404).json({error:'Invalid  password'});

    const token  = user.generateAuthToken();
    res.send(token);
}



module.exports = {
    login
}