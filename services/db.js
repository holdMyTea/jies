'use strict';

const mysql = require('mysql');

let connection = mysql.createConnection({
	host     : 'db',
	user     : 'root',
	password : 'roop',
	database : 'PHARMACY'
});

export default connection;
