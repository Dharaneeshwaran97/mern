const { read, readSync } = require("fs");
const User = require("../model/user");
const bcrypt = require("bcrypt");
const JWt = require("jsonwebtoken");
const user = require("../model/user");
const auth = require("../middleware/auth");
module.exports = (app) => {
    app.post('/userGet', auth, (req, res) => {
        User.findOne({
            email: req.body.email
        }, (err, user) => {
            if (err) throw err;
            console.log("user", user);
            if (!user || !user.comparePassword(req.body.password)) {
                return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
            }
            let token = JWt.sign({ email: user.email, userName: user.userName, _id: user._id }, process.env.TOKEN_KEY, { expiresIn: "2h" })
            user.token = token;
            return res.status(200).json(user);
        });
    });
    app.post('/newUser', (req, res) => {
        var newUser = new User(req.body);
        newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
        const token = JWt.sign(
            { user_id: newUser._id },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );
        // save user token
        newUser.token = token;
        newUser.save(function (err, user) {
            if (err) {
                return res.status(400).send({
                    message: err
                })
            } else {
                user.hash_password = undefined;
                return res.status(200).json(user);
            }
        });
        // res.send(req.body)
    });

    app.get("/getAllUser", (req, res) => {
        User.find().then((err, result) => {
            try {
                if (err) throw err;
                else {
                    return res.status(200).json(result);
                }
            } catch (err) {
                return res.status(400).send({
                    message: err
                })
            }


        });
    });

    app.post("/getEmailBasedUser", (req, res) => {
        User.find({ userName: req.body.userName }).then((err, result) => {
            if (err) throw err;
            else {
                return res.status(200).json(result);
            }
        }).catch(err => {
            return res.status(400).json({
                message: err
            });
        })
    })
}
