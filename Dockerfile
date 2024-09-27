# Use a Node.js image to build the app
FROM node:20-bullseye-slim AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
