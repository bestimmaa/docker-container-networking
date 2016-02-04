var http = require("http");
console.log("Starting up client...")
// These envs are set by the docker compose magic
var server_ip = process.env.SIMPLE_SERVER_PORT_8888_TCP_ADDR
var server_port = process.env.SIMPLE_SERVER_PORT_8888_TCP_PORT
console.log("Server address is set to "+server_ip+":"+server_port)

var request = require('request');

setInterval(function(){
  request('http://'+server_ip+":"+server_port, function (error, response, body) {
    if(error){
      console.log("error: "+error);
    }
    else if (!error && response.statusCode == 200) {
      console.log("client received response from server: "+body);
    }
    else{
      console.log("unkown response :"+body);
    }
  });
},1000);
