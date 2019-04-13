var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);


app.get('/', function (req, res){
  res.send("main page");

});


app.get('/test1', function (req, res){
  res.send("hello world");

});


app.get('/test2', function (req, res){
  res.send("first page");
});

  app.get('/test3', function (req, res){
    res.send("second page");

});


app.get('/image', function (req, res){
  res.sendfile("image/tulips.jpg");

});

app.get('/file1', function (req, res){
  res.sendfile("rawfile");

});

app.get('/file2', function (req, res){
  res.sendfile("hello.html");

});
app.get('/file3', function (req, res){
  res.sendfile("member.html");
});

app.get('/file4', function (req, res){
  res.sendfile("write.html");

});
console.log("running");
