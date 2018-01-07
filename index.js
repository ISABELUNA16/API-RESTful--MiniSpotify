//agregar instruccion del nuevo  standartJS 
'use strict'

//cargar modulo
var mongoose = require('mongoose');

//fichero de carga central
var app = require('./app');

//puerto para el servidor API
var port = process.env.PORT || 3977;

mongoose.Promise = global.Promise;
//conectando a la bd con la url de mongo---- puerto por defecto 27017

//mongoose.connect('mongodb://localhost:27017/bdspotify',{useMongoClient: true},(err, res) => {
mongoose.connect('mongodb://ROOT:1234@ds159776.mlab.com:59776/spottfy',{useMongoClient: true},(err, res) => {

	if(err){
		throw err;
	}else{
		console.log("la base de datos esta funcionando correctamente ... ");
		app.listen(port, function(){
			console.log("Servidor del API REST de musica escuchando en http://localhost:" + port);
		});

	}
});