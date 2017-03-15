'use strict';


// again babel?
/*export default function db(){
	return {
		connect: connect,
		query: query
	};
}*/

module.exports = () => ({
	connect: connect,
	query: query
});

const mysql = require('mysql');

let pool;

function connect(host, user, pass, database){
	pool = mysql.createPool({
		connectionLimit: 10,
		host: 'localhost',
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
