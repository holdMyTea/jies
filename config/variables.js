'use strict';

export default ['APP_PORT','DB_HOST','DB_USER','DB_PASS','DB_DATABASE']
.reduce((acc, val) => {
	if(process.env[val]){
		acc[val] = process.env[val];
		return acc;
	}
	else
		throw new Error('Enviromental property '+val+' is missing');
}, {});
