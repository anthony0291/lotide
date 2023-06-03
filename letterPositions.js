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


const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here 

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
    } else if (results[sentence[i]] === undefined) {
      results[sentence[i]] = [i];
    } else {
      results[sentence[i]].push(i);
    }
  }
  console.log(results);
  return results;
};

// results[sentence[i]] = [i];
// } else {
//   results[sentence[i]].push([i]);
// }




assertArraysEqual(letterPositions("hello").e, [1]);