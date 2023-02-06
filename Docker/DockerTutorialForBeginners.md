# [Docker Tutorial for Beginners](https://www.youtube.com/watch?v=3c-iBn73dDE)

## What is a docker, what is a Container

- A way to package application with all the necessary dependencies and configurationa
- Portable artifact, easily shared and moved around
- Makes development and deployment more efficient
- Layers of images
  - Mostly Linux Base Image, because small in size
  - Application image on top

### Where do containers live?

- Container Repository
- Private repositories
- Public repository for Docker ([DokcerHub](https://hub.docker.com/))

### Before Containers

- Installation process different on each OS system
- Many steps where something could go wrong
- Process of setting up a new env can actually be pretty tedious depending on how complex your application is
- Configure and install services on the server as in the local (doing same thing again),
- error prone, dependency version conflicts, misunderstandings

### After Containers

- No need to install any of the services on the OS.
- Container is its own isolated env. (Linux based image)
- packaged with all needed configuration.
- one command to intall the app.
- run sampe app with 2 different versions
- Developers and Operations work together to package the application in a container
- No environmental configuration needed on server (except for Docker Runtime)

### Docker image vs Docker Container

#### Docker Image

- the actual package
- artifact, that can be moved around

#### Docker Container

- actually start the application
- container environment is created
- container run images on machine

## Docker vs Virtual Machine

- Docker on OS level
- Different levels of abstractions
- Why linux-based docker containers don't run on Windows

### OS

- OS Kernel Layer
- Application Layer
  - Application run on Kernal Layer

### Difference

- Virtualize the Application Layer
- Virtualize the Applications Layer + OS Kernel(whole OS)
- Docker images are much much smaller
- Docker images are faster to start

## Docker Installation

## Main Commands

## Debugging a Container

## Volumns - Persisting Data

## Developing with Containers

## Docker Compose - Running multiple services

## Dockerfile - Building own Docker image

## Private Docker Repository (AWS)

## Deploying the containerized App

## Volumes Demo
