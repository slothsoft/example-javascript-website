var calculatePrice = require('./box-office.js')
const { t } = require('localizify');

module.exports = function calculatePriceWithCurrency(personCount) {
	return t('currency', { value: calculatePrice(personCount) });
}