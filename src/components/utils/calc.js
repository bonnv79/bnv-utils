import { arrCalc } from "./arrCalc";

// Sum
function sum() {
  let total = 0;

  for (let i = 0; i < arguments.length; i += 1) {
    total += arrCalc.arrSum(arguments[i]);
  }

  return total;
}

// Subtraction
function sub() {
  let res = arguments[0];

  for (let i = 1; i < arguments.length; i += 1) {
    res = arrCalc.arrSub(arguments[i], res);
  }

  return res;
}

// Multiplication
function mul() {
  let res = 1;

  for (let i = 0; i < arguments.length; i += 1) {
    res = arrCalc.arrMul(arguments[i], res);
  }

  return res;
}

// Division
function div() {
  let res = arguments[0];

  for (let i = 1; i < arguments.length; i += 1) {
    res = arrCalc.arrDiv(arguments[i], res);
  }

  return res;
}

// Mod
function mod() {
  let res = arguments[0];

  for (let i = 1; i < arguments.length; i += 1) {
    res = arrCalc.arrMod(arguments[i], res);
  }

  return res;
}

// Calculator
const calc = { sum, sub, mul, div, mod };

export { calc };