"use strict";

const mysql = require('mysql');

module.exports = {
	connectToDatabase: function(host, user, pass, database){
		let con = mysql.createConnection({
			host: host,
			user: user,
			password: pass,
			database: database
		});

		con.connect((err) => {
			if(err){
				console.log("db conection failed");
				throw err;
			}

			console.log("db connection established");
		});

		con.doQuery = doQuery;

		return con;
	}
};

function doQuery(query, callback){
	console.log('performing query: '+query);
	this.query(query, (err,rows) => {

		console.log('Got from db:');
		console.log(rows);

		if(err){
			return callback(err, null);
		}

		return callback(null, rows);
	});
}
