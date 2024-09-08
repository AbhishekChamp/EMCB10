const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const app = express();
const port = 3000;

// Middleware setup
app.use(express.json()); // Parses JSON request bodies
app.use(cors()); // Enables Cross-Origin Resource Sharing

// Create a write stream (in append mode) for today's date
const logStream = fs.createWriteStream(
    path.join(__dirname, `log-${new Date().toISOString().split("T")[0]}.log`),
    { flags: "a" },
);

// Third-Party Middleware
app.use(morgan("combined", { stream: logStream })); // Logs HTTP requests to a file

// Custom Middleware
app.use((req, res, next) => {
    console.log("Custom middleware executed");
    next();
});

// Route Definitions
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.get("/api", (req, res) => {
    res.json({ message: "API endpoint" });
});

// POST Route to Demonstrate JSON Parsing
app.post("/api/data", (req, res) => {
    res.json({
        receivedData: req.body,
    });
});

// 404 Not Found Middleware
app.use((req, res, next) => {
    res.status(404).send("Sorry, can't find that!");
});

// Error-Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

// Start the Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
