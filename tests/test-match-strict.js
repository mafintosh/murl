var assert = require('assert');
var murl = require('../index');

assert.ok(!murl('/hello', {strict:true})('/hello/'));
assert.ok(murl('/hello')('/hello/'));
assert.ok(murl('/hello/', {strict:true})('/hello/'));

assert.ok(!murl('/{hello}', {strict:true})('/hello/'));
assert.ok(murl('/{hello}')('/hello/'));
assert.ok(murl('/{hello}/', {strict:true})('/hello/'));

assert.equal(murl('/{hello}', {strict:true})('/hello world').hello, 'hello world');