var express = require("express");
var http = require("http");
var util= require("util");

var app = express();

app.get("/users/:userid", function(req, res) {
    var userid = parseInt(req.params.userid, 10);
    res.writeHead(200, {"Content-Type":"text/html"});
    console.log(userid);
    res.end("The user id is: " + userid);
})

app.use(function(request, response, next) {
    //console.log("In comes a " + request.method + " to " + request.url);
    //console.log(util.inspect(request, {showHidden: false, depth: null}));
   // console.log(util.inspect(request.query));
      var query = request.query;
    
      query.p=query.p+"test";
      console.log(query.p);
      console.log(query.p2);
      
      next();
});

app.use(function(request, response, next) {
    console.log("Secondo mid " + request.method + " to " + request.url);
    next();
});

app.use(function(request, response) {
    var query = request.query;
    //response.writeHead(200, { "Content-Type": "text/plain" });
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("Hello, world! <br>"+query.p);
});

http.createServer(app).listen(3000);