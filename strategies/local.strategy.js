const passport = require('passport');
const {strategy} = require('passport-local');


module.exports = function localStrategy() {
    passport.use(new Strategy(
        {
            username: username,
            password: password
        }, (username, password, done) => {
            const user = {
                username, password
            };
            done(null, user);
        }
    ));
};