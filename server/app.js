var express = require('express');

var app = express();
app.use(express.static('.'));

app.get('/', function (request, response) {
	response.sendfile('Index.html');
});

app.listen(8000, function () {
	console.log('Express server started!');
});