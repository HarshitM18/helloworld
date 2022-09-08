/*********************************************************************************
* WEB322 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Harshit Gupta Student ID: 157860214 Date: 09/08/2022
*
* Online (Cyclic) URL: https://dull-pear-clam-hose.cyclic.app
*
********************************************************************************/
var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Harshit Gupta ID: 157860214");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);