'use strict';

import database from '../services/db';

function addManufacturer(req, res){
	const body = req.body;

	database.query(
		'insert into MANUFACTURERS(NAME,PHONE,COUNTRY)'
		+' values("'+body.name+'",'+body.phone+', "'+body.country+'")',
		(error, results, fields) => {
			if(error){
				console.error(error.stack);
				res.status(500);
				res.send('Taking heavy casulties');
			}
			else{
				res.status(200);
				res.send('Successful');
			}
		}
	);
}

function editManufacturer(req, res){
	const id = req.params.id;
	const body = req.body;

	database.query(
		'update MANUFACTURERS set NAME="'+body.name+'",PHONE='+body.phone
		+',COUNTRY="'+body.country+'" where ID='+id,
		(error, results, fields) => {
			if(error){
				console.error(error.stack);
				res.status(500);
				res.send('Taking heavy casulties');
			}
			else{
				res.status(200);
				res.send('Successful');
			}
		}
	);
}

function deleteManufacturer(req, res){
	const id = req.params.id;

	database.query(
		'delete from MANUFACTURERS where ID='+id,
		(error, results, fields) => {
			if(error){
				console.error(error.stack);
				res.status(500);
				res.send('Taking heavy casulties');
			}
			else{
				res.status(200);
				res.send('Successful');
			}
		}
	);
}

function getManufacturersByCountry(req, res){
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
				}
			}
		);
}

function getAllManufacturers(req, res){
	database.query(
		'select * from MANUFACTURERS',
		(error, results, fields) => {
			if(error){
				console.error(error.stack);
				res.status(500);
				res.send('Taking heavy casulties');
			}
			else{
				res.status(200);
				res.json(results);
			}
		}
	)
}

function getManufacturerById(req, res){
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
				}
			}
		);
}

export default {
	addManufacturer,
	editManufacturer,
	deleteManufacturer,
	getManufacturersByCountry,
	getAllManufacturers,
	getManufacturerById
};
