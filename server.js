var http = require('http');

var handleRequest = function(request, response) {
	console.log('Recebendo mensagem da URL...: ' + request.url);
	response.writeHead(200);
	response.end('Olá, Terra!');
};
var www = http.createServer(handleRequest);
www.listen(8080);