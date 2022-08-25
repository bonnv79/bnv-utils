import { isArray } from "lodash";

// Array Sum
function arrSum(arr) {
  if (!isArray(arr)) {
    return arr;
  }

  let total = 0;

  for (let i = 0; i < arr.length; i += 1) {
    total += arr[i];
  }

  return total;
}

// Array Subtraction
function arrSub(arr, res1) {
  if (!isArray(arr)) {
    return res1 - arr;
  }

  let res = res1 !== undefined ? res1 - arr[0] : arr[0];

  for (let i = 1; i < arr.length; i += 1) {
    res -= arr[i];
  }

  return res;
}

// Array Multiplication
function arrMul(arr, res1) {
  if (!isArray(arr)) {
    return res1 * arr;
  }

  let res = res1 !== undefined ? res1 : 1;

  for (let i = 0; i < arr.length; i += 1) {
    res *= arr[i];
  }

  return res;
}

// Array Division
function arrDiv(arr, res1) {
  if (!isArray(arr)) {
    return res1 / arr;
  }

  let res = res1 !== undefined ? res1 / arr[0] : arr[0];

  for (let i = 1; i < arr.length; i += 1) {
    res /= arr[i];
  }

  return res;
}

// Array Mod
function arrMod(arr, res1) {
  if (!isArray(arr)) {
    return res1 % arr;
  }

  let res = res1 !== undefined ? res1 % arr[0] : arr[0];

  for (let i = 1; i < arr.length; i += 1) {
    res %= arr[i];
  }

  return res;
}

// Array Calculator
const arrCalc = { arrSum, arrSub, arrMul, arrDiv, arrMod };

export { arrCalc };