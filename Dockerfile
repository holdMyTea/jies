FROM node:latest

WORKDIR /app
COPY . /app

RUN npm install -g nodemon
RUN npm install

CMD npm start
