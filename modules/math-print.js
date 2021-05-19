const math = require('./math');

math.addPrint = (number1, number2) => console.log(number1 + number2);
math.subtractPrint = (number1, number2) => console.log(number1 - number2);
math.multiplyPrint = (number1, number2) => console.log(number1 * number2);
math.dividePrint = (number1, number2) => console.log(number1 / number2);

module.exports = math;