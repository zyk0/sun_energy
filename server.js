var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
//var color = require('colors');
var request = require('request');
var favicon = require('serve-favicon');
var fs = require("fs");
var clientSessions = require("client-sessions"); //подключаем

app.use(clientSessions({
	ephemeral: true,
	duration: 24 * 60 * 60 * 1000,
	secret: 'sun123-456-789' //тут не нужна запятая!!
}));

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


///////////////авторизация 
app.get("/index", function(req,res){
	res.render('Index', {title: "Index"});
	console.log('нужно залогиниться');
	//эта страница совсем не нужна
});

app.get("/auth", function(req,res){
	res.render('Auth', {title: "Auth"});
	
	if (req.session_state.username) {
		console.log('Здрасьте, ' + req.session_state.username + '!');
	} else {
		console.log('жми на <a href="/login"> Войти по логину </a>.');
	}
});

app.get('/login', function (req, res) {
  req.session_state.username = 'JohnDoe';
  console.log(req.session_state.username + ' ты залогиился, на главную страничку');
  res.redirect('/'); 
  console.log(' ща мы тебя направим на главную страничку');
  //res.redirect('/secret_page');
  //редирект на главную,т.к. страницы login.hbs нету! совсем нету!!
  //нужно сделать редирект на /secret_page'  с покером и красотками
});

app.get('/logout', function (req, res) {
  req.session_state.reset();
  res.redirect('/index'); //если разлогинился - редирект на страницу регистрации 
  console.log('ты разлогинился');
});
///////////////авторизация

app.use(function(req, res, next){
	res.status(404);
	res.render('404');
	console.log("page not found! error 404"); // . red);
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