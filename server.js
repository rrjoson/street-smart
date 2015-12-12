var express = require('express');
var server = express();
var servercontroller = require('./server/controllers/server-controller.js');
//var mongoose = require('mongoose');
var bodyParser = require('body-parser');

/*MIDDLEWARES*/
server.use(express.static(__dirname + '/client/views'));
server.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));
server.use('/angular', express.static(__dirname + '/node_modules/angular'));
server.use('/client-controllers', express.static(__dirname + '/client/controllers'));
server.use('/markerclusterer', express.static(__dirname + '/node_modules/markerclustererplus/src'));
server.use('/google-maps', express.static(__dirname + '/node_modules/google-maps/lib'));


/*UTILIZE BODYPARSER*/
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
  extended: true
}));

/*
CONNECT TO DATABASE
var dbname = 'databasename'
mongoose.connect('mongodb://localhost:27017/' + dbname);
mongoose.connection.on('connected', function() {
	console.log('connected to port 27017');
});
*/

/*METHODS*/
server.get('/getcoordinates', servercontroller.getcoordinates);
server.post('/addcoordinates', servercontroller.addcoordinates);

server.listen(3333, function () {
	console.log('listening on  port 3333');
});