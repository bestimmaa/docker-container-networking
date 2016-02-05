# README #

This project contains two small application that are available as docker images. They are used to illustrate the basic setup of networking between containers.

## Docker Commands

### Docker-Compose
In root dir

* docker-compose build
* docker-compose up

### General

#### Log into a container

docker exec -it 35cfc77b27dc935f67d00be339e9992377a6d3239047472e655a8f9b0706376d bash

### Build with tag

docker build -t NAME .

### Run and allow detach with CTRL+P,CTRL+Q
docker run -t -i NAME
