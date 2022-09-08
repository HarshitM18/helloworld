var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Harshit Gupta ID: 157860214");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);