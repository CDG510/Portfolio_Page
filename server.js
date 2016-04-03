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

app.set('port', (process.env.PORT || 5000));
app.get('/', function(request, response){
 response.send("<h1> Hello world </h1>");
});
app.listen(app.get('port'), function(){
 console.log("listening on port ", app.get('port'));
});
