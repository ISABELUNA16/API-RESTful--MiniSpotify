'use strict'

var express = require('express');
var UserController = require('../controllers/user');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

//connect-multiparty: nos permite la subida de ficheros imagen por el protocolo http
var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './uploads/users'});

api.get('/probando-controlador',md_auth.ensureAuth,UserController.pruebas);
api.post('/register', UserController.saveUser);
api.post('/login', UserController.loginUser);
//PETICION POR PUT: metodo put para actualizar
//REQUIERE UN ID OBLIGATORIO si es opciones iria(update-user/:id?) 
api.put('/update-user/:id', md_auth.ensureAuth, UserController.updateUser);
api.post('/upload-image-user/:id', [md_auth.ensureAuth, md_upload], UserController.uploadImage);
api.get('/get-image-user/:imageFile', UserController.getImageFile);

module.exports = api;