var express = require('express');
var app = express();
var port = 3000;

var middleware = {
  requireAuthentication: function (req, res, next) {
    console.log('private route hit');
    next();
  },
  logger: function (req, res, next) {
    console.log(req.method + ' '+ req.originalUrl + ' ' + new Date().toString());
    next();
  }
}

app.use(middleware.logger);

app.get('/about', function(req, res){
  res.send('this bout us yo')

});


app.use(express.static(__dirname + '/public'));

app.listen(port, function (){
  console.log('server started on port:' + port);
});
