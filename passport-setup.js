const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done){
    done(null, user);
})

passport.deserializeUser(function(user, done) {
        done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: "567022052366-vkhjrik1gudc8min7m80lm7j7vvsbc03.apps.googleusercontent.com", 
    clientSecret: "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", 
    callbackURL: "http://localhost:3000/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      return done(null, profile);
  }
));