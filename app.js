'use strict';

import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import vars from './config/variables';
import employee from './routes/employee.route';

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(employee);

app.get('/', (request, response) => response.send('Kappa'));

app.listen(vars.APP_PORT, () => console.log('Listening on', vars.APP_PORT));
