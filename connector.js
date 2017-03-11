'use strict';

const db = require('./db');

let connection = db.connectToDatabase('localhost', 'root', 'roop', 'PHARMACY');

module.exports = {
	handleGet: handleGet,
	handlePost: handlePost
};

function handleGet(url, callback){

	if(url.includes('/kappa/employee/')){
		let id = url.substring(url.lastIndexOf('/')+1);
		console.log('SHIT '+id+' '+Number.isInteger(id));
		if(!id){
			connection.query('select * from EMPLOYEES',
				(err, rows) => {
					if(err){
						return callback(err, null);
					}

					return callback(null, rows);
				}
			);
		}
		else{
			console.log('IS INTEGER');

			connection.query('select * from EMPLOYEES where ID='+id,
				(err, rows) => {
					if(err){
						return callback(err, null);
					}

					console.log('Got into callback:');
					console.log(rows);

					return callback(null, rows);
				}
			);
		}
	}
}

function handlePost(url, body, callback){

	console.log("The body is: "+body);

	body = JSON.parse(body);

	if(body.name && body.phone){
		let q = 'insert into EMPLOYEES(NAME, PHONE) '+
			'values(\''+body.name+'\', \''+body.phone+'\')';

		console.log('The query: '+q);

		connection.query(q,
			(err, rows) => {
				if(err) return callback(err, null);

				return callback(null, 'done');
			}
		);
	}
}
