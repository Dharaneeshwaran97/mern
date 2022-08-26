const JWT = require("jsonwebtoken");
const config = process.env;

const verifyToken = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"];
    if (!token) {
        res.status(403).send("A token is required for authentication")
    }
    try {
        const decodes = JWT.verify(token, config.TOKEN_KEY);
        req.user = decodes;
    } catch (err) {
        res.status(401).send("Invalid Token");
    }
    return next();
}

module.exports = verifyToken;