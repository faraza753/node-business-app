
const mongoose = require('mongoose');


module.exports = () => {
    mongoose.connect('connection string', {
        
    }).then(() => console.log('Mongo Db Connected.....'));
}