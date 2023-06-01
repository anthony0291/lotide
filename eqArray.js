
const assertEqual = function(actual, expected) {
  let ass = 'Assertation'
  let act = actual;
  let exp = expected;

  if (actual === expected) {
    console.log(`😍😍😍 ${ass} Passed: ${act} === ${exp}`);
  } else {
    console.log(`🚀🚀🚀 ${ass} Failed: ${act} !== ${exp}`);
  }
};


const eqArrays = function(num1, num2) {
    if (num1.toString() === num2.toString()) {
      return true;
    } else return false;
};



//Test 
assertEqual(eqArrays([0, 0, -2,'hello'], [0, 0, -2,'helo']), true); 
