var express = require('express');
var https = require('https');
var http = require('http');
var app = express();
// app.listen(5000);

process.env.PORT = process.env.PORT || 5000;
//Says what port this server will listen to
// app.set('port', (process.env.PORT || 5000));

//setting up a file path of where this server will e accessing things
app.use(express.static(__dirname + '../index.html'));

//set a specific action to an endpoint
app.get('/secret', function(request, response) {
  response.send('This is a secret. You will never know what it is! NEVER!');
})

//catch-call 404 in case the user requests an endpoint that does not exist
app.use(function(request, response, next) {
  response.status(404).sendFile(__dirname + '../404.html');
});

//call the function that makes the server start listening
app.listen(process.env.PORT, function() {
  console.log('Node is running at localhost:' + process.env.PORT);
});

