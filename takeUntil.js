const { emitWarning } = require("process");

const eqArrays = function(num1, num2) {
  let newNum1 = num1;
  let newNum2 = num2;
  if (num1.toString() === num2.toString()) {
    return true;
  } else {
    console.log(newNum1 + " !== " + newNum2);
    return false;
  }
};

const assertArraysEquals = function(boolean) {
  if (boolean === true) {
    console.log("Assertation Passed: These arrays are the same!");
  } else {
    console.log("Assertation Failed: These arrays are different!");
  }
};


const takeUntil = function (array, callback) {
  let newResult = [];
  for (let i of array) {
    if(callback(i) !== true) {
      newResult.push(i);
    } else {
      return newResult;
    }
  }
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);



eqArrays(results1,results2);