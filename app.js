'use strict';

const http = require('http');
const db = require('./db');

let connection = db.connectToDatabase('localhost', 'root', 'roop', 'PHARMACY');

let server = http.createServer();

server.on('request', function(request, response){
	console.log(
		'Got request\nurl:'+request.url
		+'\nmethod: '+request.method
	);

	request.on('error', function(err){
		console.log('Taking heavy casulties: '+err);
	});

	if(request.method == 'GET'){
		handleGet(request, response);
	}
	else if(request.method == 'POST'){
		handlePost(request, response);
	}
});

server.listen(1488);

function handleGet(request, response){
	let url = request.url;

	if(url.includes('/kappa/employee/')){
		let id = url.substring(url.lastIndexOf('/')+1);
		console.log('SHIT '+id+' '+Number.isInteger(id));
		if(!id){
			connection.doQuery('select * from EMPLOYEES',
				(err, rows) => {
					if(err){
						throw err;
					}

					successfulResponse(response, rows);
				}
			);
		}
		else{
			console.log('IS INTEGER');

			connection.doQuery('select * from EMPLOYEES where ID='+id,
				(err, rows) => {
					if(err){
						throw err;
					}

					console.log('Got into callback:');
					console.log(rows);

					successfulResponse(response, rows);
				}
			);
		}
	}
}

function handlePost(request, response){
	let body = [];

	request.on('data', function(piece){
		body.push(piece);
	}).on('end', function(){
		body = Buffer.concat(body).toString();
		console.log("The body is: "+body);

		response.statusCode = 200;
		response.setHeader('Content-Type', 'raw');
		response.write(
			prepareResponse("Your data is pointless: "+body)
		);
		response.end();
	});
}

function successfulResponse(response, data){
	console.log("Sending response");

	response.writeHead(200, {
		'Content-Type': 'raw'
	});
	response.write(
		prepareResponse(data)
	);
	response.end();
}

function prepareResponse(text){
	return '<html>'+
			'<body>'+
			'<p>'+JSON.stringify(text)+'</p>'+
			'</body>'+
			'</html>';
}
