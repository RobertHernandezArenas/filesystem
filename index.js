'use strict';


const fs = require('fs');// Invoco y almaceno en una variable el modulo FileSystem de NodeJS para poder manipular,
// crear y editar ficheros y/o archivos
const os = require('os'); //modulo que da info acerca del sistema operativo del user

/////////// PRUEBAS OS ///////////////
let user_cpu = os.cpus();
let user_system = os.platform();
let user_hostame = os.hostname();
console.log(user_cpu);
console.log(user_system);
console.log(user_hostame);

/////////// PRUEBAS FS ///////////////

fs.appendFile('./task/task.txt', `Go to the vet || Tarea agregado por el usuario : ${user_hostame}
					desde un sistema operativo ${user_system}`JSON.stringify(cpu),
	function (error) {
		if (error) {
			console.log('Error al crear el archivo')
		}
	});

// almaceno la ruta PATH del archivo que va a ser leido por readFileSystem();
let fileHtml = './index.html';

// almaceno la funcionalidad de leer directorios en una variable con su 
// correspondiente PATH
let leerDir = fs.readdirSync();

// almaceno la funcionalidad de leer directorios en una variable con su 
// correspondiente PATH
let leerFile = fs.readFileSync();
fs.readdir('./', (error, response) {
	if (error) {
		throw error;
	}
	console.log(response);

	let archivo = fs.readFileSync(pathFiles, 'utf-8');
	console.log('este es el contenido del archivo');
});

//fileSystemSync devuelve el contenido del archivo

http.createServer(function (request, response) {
	response.write(html);
	response.end();
}).listen(3002);
