

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

//node assertArraysEqual.js
assertArraysEquals(eqArrays([12,2,3],[1,2,3]));
//assertArraysEquals - takes 2 arrays and consoles the appropriate message
//