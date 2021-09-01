const numberDecimal = (number, decimal = 2) => parseFloat(number).toFixed(Math.min(decimal, 100));

export {
  numberDecimal
};