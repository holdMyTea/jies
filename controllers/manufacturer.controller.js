'use strict';

import database from '../services/db';

function postManufacturer(req, res){
	console.log('POST into url: '+req.url);

	const body = req.body;
	console.log('body: '+JSON.stringify(req.body));

	database.query(
		'insert into MANUFACTURERS(NAME,PHONE,COUNTRY)'
		+' values("'+body.name+'",'+body.phone+', "'+body.country+'")',
		(error, results, fields) => {
			console.log("in POST:");
			console.log("error: ",error);
			console.log("results: ",results);
			console.log("fields: ",fields);
			if(error){
				console.error(error.stack);
				res.status(500);
				res.send('Taking heavy casulties');
			}
			else{
				res.status(200);
				res.send('Successful');
				console.log('POST to /manufacturer successful');
			}
		}
	);
}

function getManufacturersByCountry(req, res){
	console.log('GET into url: '+req.url);

	const country = req.params.country;

	if(String(country).length > 0)
		database.query(
			'select * from MANUFACTURERS where COUNTRY="'+country+'"',
			(error, results, fields) => {
				if(error){
					console.error(err.stack);
					res.status(500);
					res.send('Taking heavy casulties');
				}
				else{
					res.status(200);
					res.json(results);
					console.log('GET to /manufacturer/country/:country succesfull');
				}
			}
		);
}

function getAllManufacturers(req, res){
	console.log('GET into url: '+req.url);

	database.query(
		'select * from MANUFACTURERS',
		(error, results, fields) => {
			console.log("in GET:");
			console.log("error: ",error);
			console.log("results: ",results);
			console.log("fields: ",fields);
			if(error){
				console.error(error.stack);
				res.status(500);
				res.send('Taking heavy casulties');
			}
			else{
				res.status(200);
				res.json(results);
				console.log('GET to /manufacturer successful');
			}
		}
	)
}

function getManufacturerById(req, res){
	console.log('GET into url: '+req.url);

	const id = req.params.id;

	if(Number.isInteger(Number(id)))
		database.query(
			'select * from MANUFACTURERS where ID='+id,
			(error, results, fields) => {
				if(error){
					console.error(err.stack);
					res.status(500);
					res.send('Taking heavy casulties');
				}
				else{
					res.status(200);
					res.json(results[0]);
					console.log('GET to /manufacturer/:id succesfull');
				}
			}
		);
}

export default {
	postManufacturer,
	getManufacturersByCountry,
	getAllManufacturers,
	getManufacturerById
};
