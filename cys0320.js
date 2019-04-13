var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/file1', function (req, res){
  res.sendfile("write.html");

});

app.get('/file2', function (req, res){
  res.sendfile("table.html");

});

app.get('/file3', function (req, res){
  res.sendfile("css.html");

});

app.get('/file4', function (req, res){
  res.sendfile("css1.html");

});

app.get('/file5', function (req, res){
  res.sendfile("javascript_0326.html");

});








//console.log("running");
