var User = require('./models/user');
var koaBody   = require('koa-body');
module.exports.index = function * () {
  this.response.body = {test: 'hi'};
};

module.exports.create = function * () {
  var user = new User({
    name: 'test'
  });
  user.save();
  this.response.body = post
};
