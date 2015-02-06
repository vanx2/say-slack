#!/usr/local/bin/node
var config = require('./config/default.json');
var http = require('http');
var qs = require('qs');
var exec = require('child_process').exec;

http.createServer(function (req, res) {
  var data = '';
  req.on('data', function(chunk) { data += chunk; });
  req.on('end', function() {
// data needs sanitize
    var child = exec('say ' + qs.parse(data).text ,function (err, stdout, stderr) {
      console.log(err);
    });
  });
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write('{ "text": "aa", "username": "vv" }');
  res.end();
}).listen(config.port);


