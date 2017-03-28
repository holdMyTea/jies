'use strict';

let vars = {
	APP_PORT: process.env.APP_PORT,
	DB_HOST: process.env.DB_HOST,
	DB_USER: process.env.DB_USER,
	DB_PASS: process.env.DB_PASS,
	DB_DATABASE: process.env.DB_DATABASE
};

for(const key in vars){
	if(!vars[key])
		throw new Error('Enviromental property '+key+' is missing');
}

export default vars;
