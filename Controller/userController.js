const bcrypt = require('bcrypt');
const { UserModel } = require('../Models/UserSchema');
var jwt = require('jsonwebtoken');


const userSignup = (req, res) => {

    const { Email, Password } = req.body


    try {
        bcrypt.hash(Password, 5, async (err, hash) => {

            const user = new UserModel({ Email, Password: hash });
            await user.save();
            res.status(200).send({ "msg": "Registration successful" });

            if (err) {
                res.status(400).send({ "msg": "Registration Failed" });
            }
        });
    } catch (error) {
        console.log('error:', error);
        res.status(400).send({ "msg": error.message });
    }

}


const userLogin = async (req, res) => {

    const { Email, Password } = req.body

    try {
        const user = await UserModel.findOne({ Email });

        if (user) {

            bcrypt.compare(Password, user.Password, (err, result) => {
                if (result) {

                    res.status(200).send({ "msg": "Login successful", "token": jwt.sign({ foo: 'bar' }, 'quiz') })
                }
                else {
                    res.status(400).send({ "msg": "Login Failed" });
                }
            });
        }
        else {
            console.log('error:', error);
            res.status(400).send({ "msg": error.message });
        }

    } catch (error) {
        console.log('error:', error);
        res.status(400).send({ "msg": error.message });
    }
}

module.exports = {
    userSignup,
    userLogin
}