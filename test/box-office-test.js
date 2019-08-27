var calculatePrice = require('../src/box-office.js')

QUnit.module("calculatePrice()", function() {
	QUnit.test("for 0 persons", function(assert) {
		assert.equal(calculatePrice(0), 0.0);
	});
	QUnit.test("for 1 person", function(assert) {
		assert.equal(calculatePrice(1), 80.0);
	});
	QUnit.test("for 2 persons", function(assert) {
		assert.equal(calculatePrice(2), 160.0);
	});
	QUnit.test("for 3 persons", function(assert) {
		assert.equal(calculatePrice(3), 240.0);
	});
});