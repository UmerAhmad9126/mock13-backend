var jwt = require('jsonwebtoken');

const auth = (req, res, next) => {

    const token = req.headers.authorization;

    if (token) {

        const decode = jwt.verify(token, "quiz");
        console.log('decode:', decode);

        if (decode) {
            req.body.userId = decode.userId;
            console.log(req.body);
            next();
        }
        else {
            res.status(400).send({ "msg": "Login required" });
        }

    }
    else {
        res.status(400).send({ "msg": "Login required" });
    }
}

module.exports = {
    auth
}