const mongoose = require('mongoose');


const quizSchema = mongoose.Schema({
    creator: String,
    title: String,
    description: String,
    userId: String,
    questions: [{
        title: String,
        answerOptions: [],
        correctOptions: Number
    }]
}, {
    versionKey: false
});

const QuizModel = mongoose.model("quiz", quizSchema);

module.exports = {
    QuizModel
}