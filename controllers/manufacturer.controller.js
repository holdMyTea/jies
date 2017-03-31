import database from '../services/db';

function addManufacturer(req, res){
	const body = req.body;

	if(body.name && body.phone && body.country)
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
	else{
		res.status(400);
		res.send('Insuffitient arguments');
	}
}

function editManufacturer(req, res){
	const id = req.params.id;
	const body = req.body;

	if(!(body.name || body.phone || body.country)){
		res.status(400);
		res.send('Insuffitient arguments');
		return;
	}

	let query;
	if(body.name)
		query = 'NAME="'+body.name+'"';
	if(body.phone){
		if(query)
			query = query + ',PHONE='+body.phone;
		else
			query = 'PHONE='+body.phone;
	}
	if(body.country){
		if(query)
			query = query + ',COUNTRY="'+body.country+'"';
		else
			query = 'COUNTRY="'+body.country+'"';
	}

	database.query(
		'update MANUFACTURERS set '+query+' where ID='+id,
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
