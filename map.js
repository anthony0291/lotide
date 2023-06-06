const assertArraysEquals = function(bool) {
  if (bool === true) {
    console.log("Assertation Passed: These arrays are the same!");
  } else {
    console.log("Assertation Failed: These arrays are different!");
  }
};

const eqArrays = function(num1, num2) {
  let newNum1 = num1;
  let newNum2 = num2;
  if (num1.toString() === num2.toString()) {
    assertArraysEquals(true);
  } else {
    console.log(newNum1 + " !== " + newNum2);
    assertArraysEquals(false);
  }
};





//map function will take in two arguments and return a new array based on results of callbackFunction
//argument1: arrayTOMap
//argument2: callbackFunction

const words = ["ground", "control", "to", "major", "tom"];
const moreWords = ["round", "ontrol", "o", 'ajor', 'om'];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const results1 = map(words, word => word[0]);
const results2 = map(moreWords, word => word[0]);


eqArrays(results1,results2);