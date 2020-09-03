const passport = require('passport');
require('./strategies/local.strategy');

module.exports = function passportConfig(app) {
    app.use(passport.initialize());
    app.use(passport.session());

    //Store User in session
    passport.serializeUser((user, done) => {
        done(null, user);
    });

    //Retrieve User in session
    passport.deserializeUser((user, done) => {
        done(null, user);
    });

};