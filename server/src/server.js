const express = require("express");

const app = express();

const PORT = 5000;

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "DevPulse API is running"
    });
});

app.listen(PORT, () => {
    console.log(`DevPulse API running on port ${PORT}`);
});