#!/bin/sh

# Build the Docker image for production
docker build -t my-app:production .

# Create a temporary container from the built image
docker create --name temp-container my-app:production

# Copy the build output from the container to the local machine
docker cp temp-container:/app/dist ./build

# Remove the temporary container
docker rm temp-container
