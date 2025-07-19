const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

router.get("/protected", authMiddleware, (req, res) => {
    res.json({ message: `Hello, user ${req.user.id}. You have accessed a protected route.` });
});

module.exports = router;