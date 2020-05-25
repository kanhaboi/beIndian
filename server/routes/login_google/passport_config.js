const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
require('dotenv').config();
console.log(process.env.GOOGLE_CLIENT_ID);
passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});
passport.use(new GoogleStrategy({
    clientID: "1075790983633-ict1qskka4ej94qkpht096pg749s8776.apps.googleusercontent.com",
    clientSecret: "wKp6xMXB3PSb7cKDR4B70KPR",
    callbackURL: "http://localhost:5000/auth/google/callback"
}, function (accessToken, refreshToken, profile, done) {
    console.log(profile);
    done(null, profile);
}))  