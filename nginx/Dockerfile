# pull the Node.js Docker image
FROM nginx:1.21-alpine

RUN apk update && \
    apk add nano

# copy our nginx server config over
COPY /conf/nginx.conf /etc/nginx/nginx.conf

# create the directory inside the container
WORKDIR /

# our app is running on port 8080 within the container, so need to expose it
EXPOSE 8080