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



//POSTS

app.post('/rockpost',function (req, res) {
    var rps = req.body.text;
    var URL = `https://www.api.toys/api/rock_paper_scissors/` + rps;

    axios.post(URL,{
        text : rps,
    }).then((response) => {
        res.send(response.data)
    }).catch((error) => {
        res.send(error);
        console.error(error);
    })

})


app.post('/dialingpost',function (req, res) {
    var want = req.body.text;
    var URL = `https://www.api.toys/api/dialing_codes/` + want;

    axios.post(URL,{
        text : want,
    }).then((response) => {
        res.send(response.data)
    }).catch((error) => {
        res.send(error);
        console.error(error);
    })

})


app.post('/medievalpost',function (req, res) {
    var numberOfNames = req.body.text; 
    var URL = `https://www.api.toys/api/medieval_name/` + numberOfNames;

    axios.post(URL,{
        text : numberOfNames,
    }).then((response) => {
        res.send(response.data)
    }).catch((error) => {
        res.send(error);
        console.error(error);
    })

})



app.post('/wormpost',function (req, res) {
    var numberOfNames = req.body.text; 
    var URL = `https://www.api.toys/api/worm_name/` + numberOfNames;

    axios.post(URL,{
        text : numberOfNames,
    }).then((response) => {
        res.send(response.data)
    }).catch((error) => {
        res.send(error);
        console.error(error);
    })

})


app.post('/character',function (req, res) {
    var ch = req.body.text; 
    var URL = `https://www.api.toys/api/gw2_character/` + ch;

    axios.post(URL,{
        text : ch,
    }).then((response) => {
        res.send(response.data)
    }).catch((error) => {
        res.send(error);
        console.error(error);
    })

})



// Listen Server
app.listen(port, () => {
    console.log("Server running on port " + port);
});