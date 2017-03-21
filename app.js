'use strict';

import express from 'express';
import bodyParser from 'body-parser';

import employee from './routes/employee.route';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(employee);

app.get('/', (request, response) => response.send('Kappa'));

app.listen(1488, () => console.log('Listening on 1488'));
