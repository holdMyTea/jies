'use strict';

import database from '../services/db';

function postEmployee(req, res){
	console.log('POST into url: '+req.url);

	const body = req.body;
	console.log('body: '+JSON.stringify(req.body));

	database.query(
		'insert into EMPLOYEES(NAME,PHONE)'
		+' values("'+body.name+'",'+body.phone+')',
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
				console.log('POST to /employee successful');
			}
		}
	);
}

function getAllEmployees(req, res){
	console.log('GET into url: '+req.url);

	database.query(
		'select * from EMPLOYEES',
		(error, results, fields) => {
			console.log("in GET:");getEmployeeById
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
				console.log('GET to /employee successful');
			}
		}
	)
}

function getEmployeeById(req, res){
	console.log('GET into url: '+req.url);

	const id = req.params.id;

	if(Number.isInteger(Number(id)))
		database.query('select * from EMPLOYEES where ID='+id,
			(error, results, fields) => {
				if(error){
					console.error(err.stack);
					res.status(500);
					res.send('Taking heavy casulties');
				}
				else{
					res.status(200);
					res.json(results[0]);
					console.log('GET succesfull');
				}
			}
		);
}

export default {getEmployeeById, postEmployee, getAllEmployees};