# README #

This README would normally document whatever steps are necessary to get your application up and running.

## Docker Commands

### General
#### Log into a container

docker exec -it 35cfc77b27dc935f67d00be339e9992377a6d3239047472e655a8f9b0706376d bash

### Server
docker build -t simple_server .

docker run -t -i simple_server

### Client
docker build -t simple_client .

docker run -t -i simple_client
