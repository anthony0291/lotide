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

const assertArraysEqual = function(bool) {
  if (bool === true) {
    console.log("Assertation Passed: These arrays are the same!");
  } else {
    console.log("Assertation Failed: These arrays are different!");
  }
};

const countLetters = function(sentence) {
  const results = {};
  // logic to update results here
  let sentSplit = sentence.split(' ');
  for (let i = 0; i < sentSplit.length; i++) {
    results[sentSplit[i]] = {};
    for (let s = 0; s < sentSplit[i].length; s++) {
      if (!results[sentSplit[i]][sentSplit[i][s]]) {
        results[sentSplit[i]][sentSplit[i][s]] = 1;
      } else {
        results[sentSplit[i]][sentSplit[i][s]]++;
      }
    }
  }
  console.log(results);
  return results;
};

assertArraysEqual(eqArrays(countLetters("hello"),{}));



