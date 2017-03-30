import database from '../services/db';

function addEmployee(req, res){
	const body = req.body;

	if(body.name && body.phone){
		database.query(
			'insert into EMPLOYEES(NAME,PHONE)'
			+' values("'+body.name+'",'+body.phone+')',
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
	} else{
		res.status(400);
		res.send('Insuffitient arguments');
	}
}

function editEmployee(req, res){
	const id = req.params.id;
	const body = req.body;

	if(!(body.name || body.phone)){
		res.status(400);
		res.send('Insuffitient arguments');
		return;
	}

	let query;
	if(body.name && body.phone)
		query = 'NAME="'+body.name+'",PHONE='+body.phone;
	else if(body.name)
		query = 'NAME="'+body.name+'"';
	else
		query = 'PHONE='+body.phone

	database.query(
		'update EMPLOYEES set '+ query +' where ID='+id,
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

function deleteEmployee(req, res){
	const id = req.params.id;

	database.query(
		'delete from EMPLOYEES where ID='+id,
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

function getAllEmployees(req, res){
	database.query(
		'select * from EMPLOYEES',
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

function getEmployeeById(req, res){
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
				}
			}
		);
}

export default {
	getEmployeeById,
	addEmployee,
	getAllEmployees,
	editEmployee,
	deleteEmployee
};
