const express = require("express");

const quizRoutes = express.Router();


quizRoutes.get("/", (req, res) => {
    res.send("Welcome")
});






module.exports = {
    quizRoutes
}

