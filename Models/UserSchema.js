const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    Email: String,
    Password: String
}, {
    versionKey: false
});

const UserModel = mongoose.model("user", userSchema);

module.exports = {
    UserModel
}