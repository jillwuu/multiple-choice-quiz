var http = require('http');
var express = require('express'),
    app = express();

app.use(express.static(__dirname));

app.listen(8080);

//var $ = require('jquery');


//console.log(require('./BeeHyve'));