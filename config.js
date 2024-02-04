const config = require('config');

module.exports = () => {
    if(!config.has('jwtPrivateKey')) {
        throw new Error('FATAL ERROR: jwtPrivateKey not defined');
    }
}