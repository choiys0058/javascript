var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/file1', function (req, res){
  res.sendfile("1.html");

});

app.get('/file2', function (req, res){
  res.sendfile("2.html");

});
