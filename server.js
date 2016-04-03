var express = require("express");
var path  = require("path");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static(path.join(__dirname, './client')));

//requires mongoose
require('./server/config/mongoose.js');//for mongoose usage
require('./server/config/routes.js')(app);

app.listen(8000, function(){
	console.log('party on 8000')
});
