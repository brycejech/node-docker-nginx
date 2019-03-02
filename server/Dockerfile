
# Base image
FROM node:10.15-alpine

# Set working dir to /app
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm cache clean --force && npm install

# Copy source to image AFTER installing dependencies
# This prevents code changes from causing a new 'npm install' to be run
# and speeds up the re-deployment process
COPY . /app

# Expose port 8000 (app listen port) to world outside of container
EXPOSE 8000

# Kick the tires and light the fires
CMD [ "npm", "run", "start" ]
