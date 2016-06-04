var koa = require("koa");
var app = module.exports = koa();
var router = require('koa-router')();
Mongorito = require('mongorito');
Mongorito.connect('localhost/megaphone');
// routes
var userRoutes = require("./routes.js");

router.get("/", userRoutes.create);

app.use(router.routes())

// Fire it up
console.log("The app is listening. Port 3000");
