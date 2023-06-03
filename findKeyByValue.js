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

//function findKeyBYVALUE takes in an object and a value
const findKeyByValue = function (object, value) {
  const results = {};

  let objectArray = Object.keys(object);
  //console.log(objectArray);

    for (let i = 0; i < objectArray.length; i++) {
      if (object[objectArray[i]] === value) {
        console.log(objectArray[i]);
        return objectArray[i];
    }
  }
     return results;
  }

//scans the object and make an array of keys
//returns the first key with the value
//edge case: if no key, return undefined.
//pseudo:
//scan object
// return array of object keys
//pull keys from array to access values
// see if value's match value argument.
// return 


// TEST 
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
