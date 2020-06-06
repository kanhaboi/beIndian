const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const passport = require("passport");
const passportAuthenicate = require("./routes/login_google/passport_config.js");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/admin", {
    useNewUrlParser: true,
    user: "beindian",
    pass: "beindian"
}).then(() => {
    console.log('successfully connected to the database');
}).catch(err => {
    console.log('error connecting to the database', err);
});
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