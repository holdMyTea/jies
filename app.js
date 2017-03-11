'use strict';

const http = require('http');
const connector = require('./connector');

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
		connector.handleGet(
			request.url,
			(err, data) => {
				if(err) throw err;

				successfulResponse(response, data);
			}
		);
	}

	else if(request.method == 'POST'){
		let body = [];

		request.on('data', function(piece){
			body.push(piece);
		}).on('end', function(){
			body = Buffer.concat(body).toString();
			connector.handlePost(
				request.url,
				body,
				(err, data) => {
					if(err) throw err;

					successfulResponse(response, data);
				}
			)
		});
	}

});

server.listen(1488);

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
