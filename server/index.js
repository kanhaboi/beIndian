const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const passport = require("passport");
const passportAuthenicate = require("./routes/login_google/passport_config.js");
require('dotenv').config();
app.use(cors());
app.use(bodyParser());
app.use(passport.initialize())
const login = require("./routes/login_google/index.js");
app.use("/auth", login);
app.get("/", (req, res) => {
    res.send("server at 5000");
})
app.listen(5000, () => {
    console.log("server started");
})