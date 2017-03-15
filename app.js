'use strict';

// babel?
//import express from 'express';

const db = require('./db');
const express = require('express');
const bodyParser = require('body-parser');

let database = db();
let app = express();

database.connect('localhost', 'root', 'roop', 'PHARMACY');

//TODO: check out stackoverflow magic
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.listen(1488, () => console.log('Listening on 1488'));

app.get('/', (request, response) => response.send('Kappa'));

app.get(/^\/employee\/[0-9]+$/, (request, response) => {
	console.log('GET into url: '+request.url);

	let id = request.url.substring(
		request.url.lastIndexOf('/')+1
	);
	console.log('id = '+id);

	//TODO: check wheter given id exists
	if(Number.isInteger(Number(id)))
		database.query('select * from  EMPLOYEES where ID='+id,
			(err, data) => {
				if(err) throw err;

				response.send(data);
			}
		);

});

app.post(/^\/employee$/, (request, response) => {
	console.log('POST into url: '+request.url);

	let body = request.body;
	console.log('body: '+JSON.stringify(request.body));


	database.query(
		'insert into EMPLOYEES(NAME,PHONE)'
		+' values(\''+body.name+'\','+body.phone+')',
		(err, data) => {
			if(err) throw err;

			response.end();
		}
	);
});
