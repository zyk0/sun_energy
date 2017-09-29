var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
//var color = require('colors');
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

app.use(function(req, res, next){
	res.status(404);
	res.render('404');
	//console.log("page not found! error 404". yellow);
});

/*
app.listen(2017, function(){
	console.log("Sun Energy". cyan, "127.0.0.1 port 2017". magenta);
});
*/
app.set('port', (process.env.PORT || 2017));
app.listen(app.get('port'), function() {
  console.log("Sun Energy", app.get('port'));
});