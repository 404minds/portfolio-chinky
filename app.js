var express = require('express');
var app = express();
// var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
// app.use(bodyParser.urlencoded({extended : true}));
// app.use(bodyParser.json());

// set your routes 
// var route = require('./route')(app);

// Initialize app
var server = app.listen(process.env.PORT || 5025, function() {
  var port = server.address().port;
    console.log("Portfolio Chinky App is now running on port", port);
});