var express = require('express');
var request = require('request');

var app = express();

app.use(express.static(__dirname + '/../app'));

app.listen(8000, function(){
	console.log('App started on port 8000!');
});