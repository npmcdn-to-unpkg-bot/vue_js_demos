var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('views'));
app.use(bodyParser.json());

app.post('/the_great_mythical_api_endpoint', function (req, res) {
  console.log(req.body);
  res.json({"status":"success"});
});

var appPort=8080;

app.listen(appPort, function () {
  console.log("Magic on port %d",appPort);
});
