// set up i18n

require('./init-i18n.js')

// calculate prices

var calculatePrice = require('./international-box-office.js')

document.getElementById('single-price').innerHTML = calculatePrice(1);
document.getElementById('family-price').innerHTML = calculatePrice(4);