var assert = require('assert');
var murl = require('../index');

assert.ok(murl('/hello')('/hello'));
assert.equal(murl('/{hello}')('/hello').hello, 'hello');
assert.equal(murl('/{hello}')('/hello%20world').hello, 'hello world');