var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', './view');
app.use(express.static('public'));

//port
app.listen(3000, function () {
   console.log('Server start ...');
});

//routes
app.get('/', function (req, res) {
   res.render('home');
});