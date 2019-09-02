var calculatePrice = require('../src/international-box-office.js')
var localizify = require('../src/init-i18n.js');

QUnit.module("calculatePrice(Euro)", function (hooks) { 
	hooks.beforeEach(function() {
		localizify.setLocale("de");
	});
	
	QUnit.test("for 2 persons", function(assert) {
		assert.equal(calculatePrice(2), "160 &euro;");
	});
});

QUnit.module("calculatePrice($)", function (hooks) { 
	hooks.beforeEach (function() {
		localizify.setLocale("en");
	});
	
	QUnit.test("for 1 person", function(assert) {
		assert.equal(calculatePrice(1), "$80");
	});
});

