FROM node:boron

RUN mkdir -p /usr/src/jies
WORKDIR /usr/src/jies

ADD . /usr/src/jies/
RUN npm install
RUN npm install -g nodemon
RUN npm install -g mocha

ENV APP_HOST 0.0.0.0
ENV APP_PORT 8080
ENV DB_DATABASE PHARMACY
ENV DB_HOST db
ENV DB_USER root
ENV DB_PASS pass

EXPOSE 8080
CMD [ "npm", "start" ]
