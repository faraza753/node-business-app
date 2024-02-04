
const mongoose = require('mongoose');


module.exports = () => {
    mongoose.connect('mongodb+srv://faraz:BP%4012@cluster0.o34vmvw.mongodb.net/', {
        
    }).then(() => console.log('Mongo Db Connected.....'));
}