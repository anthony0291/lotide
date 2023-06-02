const eqArrays = function(num1, num2) {
  let newNum1 = num1;
  let newNum2 = num2;
  if (num1.toString() === num2.toString()) {
    console.log(newNum1 + " === " + newNum2);
    return true;
  } else {
    console.log(newNum1 + " !== " + newNum2);
    return false;
  }
};

const assertArraysEquals = function(bool) {
  if (bool === true) {
    console.log("Assertation Passed: These arrays are the same!");
  } else {
    console.log("Assertation Failed: These arrays are different!");
  }
};

// take in array       [1,2,3,4,5,6]
const middle = function(array) {
  let middleOnly = [];
  let arrayMiddle = array.length / 2;
  
  if (array.length % 2 === 0 && array.length > 2) {
    //even
    middleOnly = array.slice((arrayMiddle - 1), (arrayMiddle + 1));
    console.log(middleOnly);
    return middleOnly;
  } else if (array.length % 2 !== 0 && array.length > 2) {
    //odd
    middleOnly = array.slice(arrayMiddle, (arrayMiddle + 1));
    console.log(middleOnly);
    return middleOnly;
  } else if (array.length <= 2) {
    console.log(middleOnly);
    return middleOnly;
  }
};

assertArraysEquals(eqArrays(middle([1,2,3]), [2])); // => [2]
assertArraysEquals(eqArrays(middle([1, 2, 3, 4, 5]), [3]));
assertArraysEquals(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3,4]));
assertArraysEquals(eqArrays(middle([1,3,4]), [2,3]));
