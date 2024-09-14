const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authMiddleware");

// Example protected route
router.get("/secret", authenticateToken, (req, res) => {
    res.json({ message: "This is a protected route!", user: req.user });
});

module.exports = router;
