const express = require("express");
const {response} = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const {request} = require("express");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
//urlencoded : to get the information posted to server from html form
//bodyParser : to parse http request
//together : allows access to properties of object posted

app.get("/", function (req, res) {

    // .sendFile() is deprecated.
    // Must use path.join(__dirname, [path]) to make it work
    res.sendFile(path.join(__dirname, '/index.html'));

})

app.post("/", function (req, res) {

//  remember in javascript these are returned as text,
//  so you have to convert them into numbers

    let num1 = Number(req.body.n1);
    let num2 = Number(req.body.n2);
    let result = num1 + num2;

    res.send("The result of the calculation is " + result);
})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})