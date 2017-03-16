'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import db from './db';

const database = db();
const app = express();

database.connect('localhost', 'root', 'roop', 'PHARMACY');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/', (request, response) => response.send('Kappa'));

app.get('/employee/:id', (req, res) => {
	console.log('GET into url: '+req.url);

	const id = req.params.id;

	if(Number.isInteger(Number(id)))
		database.query('select * from  EMPLOYEES where ID='+id,
			(err, data) => {
				if(err){
					console.error(err.stack);
					res.status(500);
					res.send('Taking heavy casulties');
				}

				res.json(data);
			}
		);

});

app.post('/employee', (req, res) => {
	console.log('POST into url: '+req.url);

	const body = req.body;
	console.log('body: '+JSON.stringify(req.body));


	database.query(
		'insert into EMPLOYEES(NAME,PHONE)'
		+' values("'+body.name+'",'+body.phone+')',
		(err, data) => {
			if(err){
				console.error(err.stack);
				res.status(500);
				res.send('Taking heavy casulties');
			}

			res.status(200);
			res.send('Successful');
			console.log('POST to Employee successful');
		}
	);
});

app.listen(1488, () => console.log('Listening on 1488'));
