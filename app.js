
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var home = require('./routes/home')
var equip = require('./routes/equip')
var friends = require('./routes/friends')
var group = require('./routes/group')
var quest = require('./routes/quest')
var self = require('./routes/self')
var profile = require('./routes/self')
var shop = require('./routes/shop')
var checkout = require('./routes/checkout')
var adventure = require('./routes/adventure')
var join = require('./routes/join')
var invite = require('./routes/invite');
// Example route
// var user = require('./routes/user');
//var add = require('./routes/add');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/login', index.login);
app.get('/equip', equip.view);
app.get('/friends', friends.view);
app.get('/group', group.view);
app.get('/home', home.view);
app.get('/quest', quest.view);
app.get('/self', self.view);
app.get('/profile/:id', self.viewProfile);
app.get('/shop', shop.view);
app.get('/checkout', checkout.view);
app.get('/item/:id', shop.itemInfo);
app.get('/adventure', adventure.view);
app.get('/join', join.view);
app.get('/invite', invite.view);

// Example route
// app.get('/users', user.list);
//app.get('/add', add.addFriend);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
