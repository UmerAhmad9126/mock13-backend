const express = require("express");
const { connection } = require("./Configs/db");
const { userRoutes } = require("./Routers/UserRouter");
require('dotenv').config();
const cors = require('cors');
const { auth } = require("./Middleware/authMiddileware");
const { quizRoutes } = require("./Routers/QuizRouter");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use(auth);
app.use("/quiz", quizRoutes);


app.listen(process.env.PORT, async () => {

    try {
        await connection;
        console.log("Connected to MongoDB");

    } catch (error) {
        console.log('error:', error)
    }

    console.log("Server is listening on port" + process.env.PORT)
})