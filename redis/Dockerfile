# pull the Node.js Docker image
FROM redis:7.0.0-alpine

RUN apk update && \
    apk add nano

# our app is running on port 5000 within the container, so need to expose it
EXPOSE 6379