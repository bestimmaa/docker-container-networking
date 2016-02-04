# README #

This project contains two small application that are available as docker images. They are used to illustrate the basic setup of networking between containers.

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
