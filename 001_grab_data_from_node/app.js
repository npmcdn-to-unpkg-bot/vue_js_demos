var express = require('express');
var app = express();

app.use(express.static('views'));


app.get('/widget-info', function (req, res) {
  res.json({"server_data":"data from the server", "random_data":"run backwards and wave your hands"});
});

var appPort=8080;

app.listen(appPort, function () {
  console.log("Magic on port %d",appPort);
});
