'use strict';

const mysql = require('mysql');

let connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'roop',
	database : 'PHARMACY'
});

export default connection;
