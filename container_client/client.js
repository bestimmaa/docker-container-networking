var http = require("http");
console.log("Starting up client :)")
var request = require('request');


setInterval(function(){
  console.log('test');
  request('http://localhost:8888', function (error, response, body) {
    if(error){
      console.log("error: "+error);
    }
    if (!error && response.statusCode == 200) {
      console.log("client received response from server: "+body);
    }
  });
},1000);
