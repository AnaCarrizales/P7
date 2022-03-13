var http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/plain'});//Se muestra en la sección de header que es texto plano
    res.end('Hello world\n');//mensaje a mostrar

}).listen(1337,'127.0.0.1');//huesped local

//Al abrir el web browser y buscar localhost:1337 se nos muestra el mensaje de Hello World.
// En la parte de encabezados nos muestra que el método request http implementado ha sido GET y la dirección y URL requeridos.
