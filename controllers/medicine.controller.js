'use strict';

import database from '../services/db';

function getAllMedicines(req, res){
	console.log('GET into url: '+req.url);

	database.query(
		'select * from MEDICINES',
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
				console.log('GET to /medicines successful');
			}
		}
	)
}

function postMedicine(req, res){
	console.log('POST into url: '+req.url);

	const body = req.body;
	console.log('body: '+JSON.stringify(req.body));

	database.query(
		'insert into MEDICINES(NAME,MANUFACTURER,DOSAGE)'
		+' values("'+body.name+'",'+body.manufacturer+', '+body.dosage+')',
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
				console.log('POST to /medicine successful');
			}
		}
	);
}

function getMedicineById(req, res){
	console.log('GET into url: '+req.url);

	const id = req.params.id;

	if(Number.isInteger(Number(id)))
		database.query(
			'select * from MEDICINES where ID='+id,
			(error, results, fields) => {
				if(error){
					console.error(err.stack);
					res.status(500);
					res.send('Taking heavy casulties');
				}
				else{
					res.status(200);
					res.json(results[0]);
					console.log('GET to /medicine/:id succesfull');
				}
			}
		);
}

function getMedicineByManufacturer(req, res){
	console.log('GET into url: '+req.url);

	const manufacturer = req.params.manufacturer;

	if(Number.isInteger(Number(manufacturer)))
		database.query(
			'select * from MEDICINES where MANUFACTURER='+manufacturer,
			(error, results, fields) => {
				if(error){
					console.error(err.stack);
					res.status(500);
					res.send('Taking heavy casulties');
				}
				else{
					res.status(200);
					res.json(results);
					console.log('GET to /medicnes/manufacturer/:manufacturer succesfull');
				}
			}
		);
}

export default {
	getAllMedicines,
	postMedicine,
	getMedicineById,
	getMedicineByManufacturer
};
