'use strict';

let vars = {};

if(process.env.APP_PORT != undefined)
	vars.APP_PORT = process.env.APP_PORT;
else throw new Error('Enviroment variable is missing');

if(process.env.DB_HOST != undefined)
	vars.DB_HOST = process.env.DB_HOST;
else throw new Error('Enviroment variable is missing');

if(process.env.DB_USER != undefined)
	vars.DB_USER = process.env.DB_USER;
else throw new Error('Enviroment variable is missing');

if(process.env.DB_PASS != undefined)
	vars.DB_PASS = process.env.DB_PASS;
else throw new Error('Enviroment variable is missing');

if(process.env.DB_DATABASE != undefined)
	vars.DB_DATABASE = process.env.DB_DATABASE;
else throw new Error('Enviroment variable is missing');

export default vars;
