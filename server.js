var dataService = require('./data-service');

var express = require('express'); // Express web server framework
var app = express();

app.use(express.static('public')); // sets up the static middleware

var HTTP_PORT = process.env.PORT || 8080;

// the server is listening on process.env.PORT || 8080
app.listen(process.env.PORT || 8080, function() {
  console.log('Express http server listening on port ' + (process.env.PORT || 8080));
});

// this defines a "route":
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/home.html');
});

// this defines a "route":
app.get('/about', function(req, res) {
  res.sendFile(__dirname + '/views/about.html');
});


//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //


// Rough Work

/*
var express = require('express');
var app = express();

var path = require("path"); // include moduel path to use __dirname, and function path.join()
app.use(express.static('public'));

app.get("/", function(req, res){
});
 // setup another route to listen on /about
app.get("/about", function (req, res){
});

var HTTP_PORT = process.env.PORT || 8080;  // || : or

// call this function after the http server starts listening for requests
function onHttpStart(){
    console.log("Express http server listening on port" + HTTP_PORT);
}
*/


/*
// http://localhost:8080
var express = require("express"); // Include express.js module
var app = express();

app.use(express.static('public'));

var path = require("path"); // include moduel path to use __dirname, and function path.join()

var HTTP_PORT = process.env.PORT || 8080;  // || : or

// call this function after the http server starts listening for requests
function onHttpStart(){
    console.log("Express http server listening on port" + HTTP_PORT);
}

// Routes for returning home and about files
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/home.html');
    });
    app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/about.html');
    });
*/