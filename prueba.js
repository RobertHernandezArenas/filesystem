'use strict';


const fs = require('fs');// Invoco y almaceno en una variable el modulo FileSystem de NodeJS para poder manipular,
								// crear y editar ficheros y/o archivos
const os = require('os'); //modulo que da info acerca del sistema operativo del user

/////////// PRUEBAS OS ///////////////
let user_cpu = os.cpus();
console.log(user_cpu)
let user_system = os.platform();
let user_hostame = os.hostname();
let stringTxt = JSON.stringify(user_cpu);
/////////// PRUEBAS FS ///////////////

fs.appendFile (`./task/task.txt`,`Go to the vet || \nTarea agregado por el usuario : \n ${user_hostame} 
					desde un sistema operativo \n ${user_system.model}${stringTxt}`,function(error) {

					if (error) {
						console.log('Error al crear el archivo')
					}
});