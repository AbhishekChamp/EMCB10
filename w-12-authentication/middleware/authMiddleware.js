const jwt = require("jsonwebtoken");
require("dotenv").config();

// Secret key for JWT
const JWT_SECRET = process.env.JWT_SECRET; // Replace with a more secure key in production

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // Extract token from "Bearer <token>"

    if (token == null) return res.sendStatus(401); // Unauthorized if no token

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); // Forbidden if token is invalid

        req.user = user; // Attach user info to request
        next(); // Proceed to the next middleware or route handler
    });
};

module.exports = authenticateToken;
