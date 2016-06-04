var koa = require('koa');
require('mongorito');
var Mongorito = require('mongorito');
Mongorito.connect('localhost/megaphone');

var app = module.exports = koa();
var mount = require('koa-mount');

// Api's
var userApp = require('./users/app');
//mount
app.use(mount('/users', userApp));
app.listen(3000);
