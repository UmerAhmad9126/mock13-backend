const express = require("express");
const { userSignup, userLogin } = require("../Controller/userController");

const userRoutes = express.Router();


userRoutes.post("/signup", (req, res) => {
    userSignup(req, res);
});

userRoutes.post("/login", (req, res) => {
    userLogin(req, res);
})





module.exports = {
    userRoutes
}

