// Importamos el módulo 'http' de Node.js
const http = require('http');

// Creamos un servidor HTTP que responde con "Hello, World!" a todas las solicitudes
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, World!\n');
});
//aaaaaaaaaaa

// Escuchamos en el puerto 3000 y mostramos un mensaje cuando el servidor esté listo
server.listen(3000, 'localhost', () => {
  console.log('Servidor corriendo en http://localhost:3000/');
});
