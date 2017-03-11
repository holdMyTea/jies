'use strict';

const mysql = require('mysql');

module.exports = {
	connectToDatabase: function(host, user, pass, database){
		let pool = mysql.createPool({
			connectionLimit: 10,
			host: 'localhost',
			user: 'root',
			password: 'roop',
			database: 'PHARMACY'
		});

		return {
			pool: pool,
			query: query
		};
	}
};

function query(query, callback){
	console.log('performing query: '+query);
	this.pool.query(query, (err,rows) => {

		console.log('Got from db:');
		console.log(rows);

		if(err){
			return callback(err, null);
		}

		return callback(null, rows);
	});
}
