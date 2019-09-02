const localizify = require('localizify');

const en = require('./messages/en.json');
const de = require('./messages/de.json');

localizify.add('en', en).add('de', de);

var userLang = "en";
if (typeof navigator !== 'undefined' ) 
	userLang = navigator.language || navigator.userLanguage; 
localizify.setLocale(userLang);

module.exports = localizify;