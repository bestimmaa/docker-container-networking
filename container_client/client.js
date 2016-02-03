var http = require("http");
 
var request = require('request');
request('http://localhost:8888', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("client received response from server: "+body)
  }
})
