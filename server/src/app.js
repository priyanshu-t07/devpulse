const express = require("express");

const app = express();

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "DevPulse API is running smoothly.",
    });
});

module.exports = app;