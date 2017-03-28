'use strict';

import mysql from 'mysql';

import vars from '../config/variables';

let connection = mysql.createConnection({
	host     : vars.DB_HOST,
	user     : vars.DB_USER,
	password : vars.DB_PASS,
	database : vars.DB_DATABASE
});

export default connection;
