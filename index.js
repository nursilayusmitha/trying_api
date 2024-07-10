const express = require("express");
const mongoose = require("mongoose");

const dataRoutes = require('./routes/dataRoutes');

const app = express();

app.use(express.json()); // Middleware to parse JSON

// routes
app.use('/api/data', dataRoutes);

app.get("/", (req, res) => {
    res.send("Hello from Node API Server Updated");
});

mongoose
    .connect(
        "mongodb://localhost:27017/crud_api",
        { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
    )
    .then(() => {
        console.log("Connected to database!");
        app.listen(4000, () => {
            console.log("Server is running on port 4000");
        });
    })
    .catch((err) => {
        console.log("Connection failed!", err);
    });
