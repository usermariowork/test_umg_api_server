//Importing packages
const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

//Using packages
const app = express();

//Set port for HEROKU
let port = process.env.PORT || 8080

// Middleware to read json objs
app.use(express.json());
app.use(morgan('dev'));

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
app.post('/post', (req, res) => {
    //const END_POINT ='https://www.api.toys/api/random_blog_name'
    //axios.post(END_POINT)
	console.log(req.body.prop1);
	aux = req.body.prop1;
	//Answer to client
	res.send(`Recieved: ${aux} ${req.body.prop2}`);
});






// Testing for Acios APIs
app.get('/rick', (req, res)=> {
    const END_POINT ='https://rickandmortyapi.com/api/character'
    axios.get(END_POINT)
        .then(function(response) {
            console.log(response.data)
            res.send(response.data)
        })
        .catch(function (error){
            console.log(error);
            res.send(error);
        });
})



app.get('/rock', (req, res)=> {
    const END_POINT ='https://www.api.toys/api/rock_paper_scissors'
    axios.get(END_POINT)
        .then(function(response) {
            console.log(response.data)
            res.send(response.data)
        })
        .catch(function (error){
            console.log(error);
            res.send(error);
        });
})


app.get('/dialingcodes', (req, res)=> {
    const END_POINT ='https://www.api.toys/api/dialing_codes'
    axios.get(END_POINT)
        .then(function(response) {
            console.log(response.data)
            res.send(response.data)
        })
        .catch(function (error){
            console.log(error);
            res.send(error);
        });
})

app.get('/medievalname', (req, res)=> {
    const END_POINT ='https://www.api.toys/api/medieval_name'
    axios.get(END_POINT)
        .then(function(response) {
            console.log(response.data)
            res.send(response.data)
        })
        .catch(function (error){
            console.log(error);
            res.send(error);
        });
})


app.get('/coinflip', (req, res)=> {
    const END_POINT ='https://www.api.toys/api/coin_flip'
    axios.get(END_POINT)
        .then(function(response) {
            console.log(response.data)
            res.send(response.data)
        })
        .catch(function (error){
            console.log(error);
            res.send(error);
        });
})


app.get('/diceroll', (req, res)=> {
    const END_POINT ='https://www.api.toys/api/dice_roll'
    axios.get(END_POINT)
        .then(function(response) {
            console.log(response.data)
            res.send(response.data)
        })
        .catch(function (error){
            console.log(error);
            res.send(error);
        });
})











// Listen Server
app.listen(port, () => {
    console.log("Server running on port " + port);
});