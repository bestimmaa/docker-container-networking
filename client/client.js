var http = require("http");
console.log("Starting up client...")
// These envs are set by the docker compose magic
var server_ip = process.env.SIMPLE_SERVER_PORT_8888_TCP_ADDR
var server_port = process.env.SIMPLE_SERVER_PORT_8888_TCP_PORT
console.log("Server address is set to "+server_ip+":"+server_port)

var request = require('request');
var server_address = 'http://'+server_ip+":"+server_port;

setInterval(function(){
  console.log("sending http request...");
  request(server_address, function (error, response, body) {
    if(error){
      console.log("error: "+error);
    }
    else if (!error && response.statusCode == 200) {
      console.log("received code 200 response: "+body);
    }
    else{
      console.log("unkown response:"+body);
    }
  });
},1000);
