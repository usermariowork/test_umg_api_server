const express = require('express');

const app = express();

// Middleware to read json objs
app.use(express.json()) 

// Routes to acces the root directory of the API
app.get('/', (req, res) => {
    res.send("<h1> God Ivan </h1>");
})

// Route to test a json response
app.get('/test', (req, res) => {
    res.json({
        prop1: "hello",
        prop2: "world"
    })
})

// POST Routes
app.post('/test_post', (req, res) => {
    console.log(req.body);
    res.send("Received!");
})

// Listen Server
app.listen(4000, () => {
    console.log("Server running on port 4000");
});