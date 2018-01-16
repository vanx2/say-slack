#!/usr/bin/env node
var config = require('./config/default.json');
var http = require('http');
var qs = require('qs');
var exec = require('child_process').execFile;

http.createServer(function (req, res) {
  var data = '';
  req.on('data', function(chunk) { data += chunk; });
  req.on('end', function() {
// TODO: cleaning posted data
  var text = qs.parse(data).text;
console.log(text);
    if (text) {
      var child = exec('/usr/bin/say',[text] ,function (err, result) {
        console.log(result);
      });
    }
  });
  res.writeHead(200, {'Content-Type': 'application/json'});
//  res.write('{ "text": "aa", "username": "vv" }');
  res.end();
}).listen(config.port);


