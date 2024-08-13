# Use a Node.js image as the base
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install project dependencies using Yarn
RUN yarn install

# Copy the rest of the project files to the working directory
COPY . .

# Expose the port on which the application will be served
EXPOSE 3030

# Command to run the application in development mode
CMD ["yarn", "dev"]
