'use strict'

var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var AlbumSchema = Schema({
	title: String,
	description: String,
	year: Number,
	image: String,
	//guarda un ID de otro objeto guardado en la base de datos
	//se referencia a la entidad del objeto Artista, se relaciona con el objeto Artist
	artist:{ type: Schema.ObjectId, ref:'Artist'}
});

module.exports = mongoose.model('Album', AlbumSchema);
