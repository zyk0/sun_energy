var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var color = require('colors');
var request = require('request');
var favicon = require('serve-favicon');
//var moment = require('moment');

//var os = require('os');
//var os = require('./os');
//console.log('type: ' + os.platform().green);

/*
var publicIp = require('public-ip');

publicIp.v4().then(function(ip) {
    console.log(ip);
    //=> '123.45.67.08' 
});
*/

/* log winston */
var winston = require('winston'); // логгер 

winston.add(winston.transports.File, { filename: 'somefile.log' });
winston.configure({
	transports: [
	  new (winston.transports.File)({ filename: 'somefile.log' })
	]
});
winston.info('Hello again distributed logs');
  
/* log winston */  
//console.log(require('./Manifestos').cyborg); // тест подключения произвольного модуля

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.use(favicon(__dirname + '/public/images/a.ico')); // favicon


//удаляем инф-ию о использовании node, express из x-powered-by
//app.disable('x-powered-by');

//routing
app.get("/", function(req,res){
	res.render('home', {title: "Homepage"});
});
app.get("/about", function(req,res){
	res.render('about', {title: "About"});
});
app.get("/contact", function(req,res){
	res.render('contact', {title: "Contact"});
});
app.get("/news", function(req,res){
	res.render('news', {title: "News"});
});

// 404error
app.use(function(req, res, next){
	res.status(404);
	res.render('404');
	console.log("page not found! error 404". yellow);
});
//port
app.listen(2017, function(){
	console.log("Sun Energy". cyan, "127.0.0.1 port 2017". magenta);
});
