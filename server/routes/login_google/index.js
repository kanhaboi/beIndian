const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
router.get("/google", passport.authenticate("google", { scope: ['profile', 'email'] }));
router.get("/google/callback", passport.authenticate('google', { failureRedirect: "/login" }), (req, res) => {
    console.log("reached here")
    console.log(req);
    const data = {
        email: req.user.emails[0].value,
        name: req.user.displayName,
        image: req.user.photos[0].value
    }

    console.log(data);
    const token = jwt.sign(data, "beindiansecret", {});
    console.log(token);
    res.cookie("login", "loggedIn", { httpOnly: false });
    res.cookie("access_token", token, { httpOnly: false });
    res.redirect("http://localhost:3000/home");
})
module.exports = router; 