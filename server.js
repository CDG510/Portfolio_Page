var express = require("express");
var path  = require("path");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


app.use(express.static(path.join(__dirname, './client')));

//requires mongoose
require('./server/config/mongoose.js');//for mongoose usage
require('./server/config/routes.js')(app); //for later blog implementation

app.listen(5000, function(){
	console.log('party on 5000')
});
