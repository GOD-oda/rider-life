FROM node:13-alpine

WORKDIR /var/www/html

RUN apk update && \
        npm install -g npm firebase-tools @vue/cli