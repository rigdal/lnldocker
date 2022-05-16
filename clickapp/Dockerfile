# pull the Node.js Docker image
FROM node:alpine

RUN apk update && \
    apk add nano && \
    npm i -g nodemon 

# create the directory inside the container
WORKDIR /usr/src/app

# copy the package.json files from local machine to the workdir in container
COPY ./app/package*.json ./

# run npm install in our local machine
RUN npm install

# copy the generated modules and all other files to the container
COPY ./app .

# our app is running on port 5000 within the container, so need to expose it
EXPOSE 8080

# the command that starts our app
CMD ["node", "index.js"]