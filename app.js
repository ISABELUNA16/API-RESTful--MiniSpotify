'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar rutas
var user_routes = require('./routes/user');
var artist_routes = require('./routes/artist');
var album_routes = require('./routes/album');
var song_routes = require('./routes/song');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//configurar cabeceras http CORS
//para evitar el control de acceso, se configurar las cabeceras en cada petición
//* permitimos acceso a todos los dominios, y q el ai a nivel de ajax funcione
app.use((req, res, next)=>{
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

	next();

});

//rutas base 

//middleware de express para configurar rutas
app.use('/api', user_routes);
app.use('/api', artist_routes);
app.use('/api', album_routes);
app.use('/api', song_routes);

/*app.get('/pruebas',function(req,res){
	res.status(200).send({message:'BIENVENIDO A MI SPOTIFY'});
});*/


module.exports = app;


