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
require('./server/config/routes.js')(app);
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://heroku_401hqq7g:tibopv4niudnqgrehgngbadrl2@ds015730.mlab.com:15730/heroku_401hqq7g'); //for mongolabs/heroku


app.set('port', (process.env.PORT || 5000));
app.get('/', function(request, response){
 response.send("<h1> Hello world </h1>");
});
app.listen(app.get('port'), function(){
 console.log("listening on port ", app.get('port'));
});
