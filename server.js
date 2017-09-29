var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var color = require('colors');
var request = require('request');
var favicon = require('serve-favicon');
var fs = require("fs");

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public')); //('public'));

app.use(favicon(__dirname + '/public/images/a.ico')); // favicon

//routing
app.get("/", function(req,res){
	res.render('home', {title: "Homepage"});
	//logger.info('main page'. grey);
});
app.get("/about", function(req,res){
	res.render('about', {title: "About"});
	//logger.info('about'. grey);
});
app.get("/contact", function(req,res){
	res.render('contact', {title: "Contact"});
	//logger.info('Entering'. grey);
});
app.get("/news", function(req,res){
	res.render('news', {title: "News"});
	//logger.info('news about solar systems'. grey );
});

// 404error
app.use(function(req, res, next){
	res.status(404);
	res.render('404');
	//console.log("page not found! error 404". yellow);
});

//port
app.listen(2017, function(){
	console.log("Sun Energy". cyan, "127.0.0.1 port 2017". magenta);
});