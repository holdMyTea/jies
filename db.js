'use strict';

const mysql = require('mysql');

let pool;

// like this, or should put it into export function?
connect('localhost', 'root', 'roop', 'PHARMACY');

export default function db(){
	return {
		query: query
	};
}

function connect(host, user, pass, database){
	pool = mysql.createPool({
		connectionLimit: 10,
		host: 'db',
		user: 'root',
		password: 'roop',
		database: 'PHARMACY'
	});
	console.log('DB connected');
}

function query(q, callback){
	console.log('performing query: '+q);
	pool.query(q, (err,rows) => {

		console.log('Got from db:');
		console.log(rows);

		if(err){
			return callback(err, null);
		}

		return callback(null, rows);
	});
}
