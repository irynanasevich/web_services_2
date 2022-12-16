const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;

passport.serializeUser(function(user, cb){
    cb(null, user);
})

passport.deserializeUser(function(user, cb) {
    cb(null, user);
});

passport.use(new GitHubStrategy({
        clientID: "ad802e238ec0706db358",
        clientSecret: "93f85ba1703aef53dadafc3fe017da8e2465dbcb",
        callbackURL: "http://localhost:3000/github/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
        return cb(null, profile);
    }
));