var assert = require('assert');
var murl = require('../index');

var test = function(pattern, opt, eq) {
	assert.equal(murl(pattern)(opt), eq);
};

test(undefined, {}, '');
test(undefined, {test:42}, '');

test('/hello', {}, '/hello');
test('/{hello}', {hello:'hello'}, '/hello');
test('/{hello}', {hello:'hello world'}, '/hello%20world');
test('/{*}', {'*':'hello%20world'}, '/hello%20world');
test('/*', {'*':'hello%20world'}, '/hello%20world');
test('/*', {'*':'hello%20world/more'}, '/hello%20world/more');
test('/{hello}/{world}', {hello:'hello',world:'world'}, '/hello/world');
test('/{hello}/{world}', {unused:true, hello:'hello',world:'world'}, '/hello/world');
