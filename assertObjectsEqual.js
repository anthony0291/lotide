const eqArrays = function(array1, array2) {
  assertEqual(array1.toString(), array2.toString());
};

const assertEqual = function(actual, expected) {
  let ass = 'Assertation';
  let act = actual;
  let exp = expected;

  if (actual === expected) {
    console.log(`😍😍😍 ${ass} Passed: ${act} === ${exp}`);
  } else {
    console.log(`🚀🚀🚀 ${ass} Failed: ${act} !== ${exp}`);
  }
};

const eqObjects = function(object1, object2) {
  let objArray1 = Object.keys(object1);
  let objArray2 = Object.keys(object2);
  console.log(objArray1); console.log(objArray2);

  
  if (objArray1.length === objArray2.length) {
    console.log("1:" + objArray1);
    //for i of objectArray1 [i,i,i] (key list)
    for (const i of objArray1) {
      //if any of object1keys pull up an array
      if (Array.isArray(object1[i])) {
        //[i] is the specific key
        console.log("2: " + object2[i]);
        //display object1 values
        console.log(object1[i]); console.log(object2[i]);
        //compare: object1's key values, and use obj1's key refer to object2 with object1's key value, call object2 value with object1 key
        eqArrays(object1[i], object2[i]);
        
      } else if (object1[i] != object2[i]) {
        return false;
      }
    } return true;
  } else {
    return false;
  }
};



//assertObjectsEqual will take in two objects and console.log response.

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
    if(inspect(actual) === inspect(expected)){
      console.log(`😍😍😍 Assertation Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
      console.log(`🚀🚀🚀 Assertation Failed: ${inspect(actual)} !== ${inspect(expected)}`);;
    }
};






assertObjectsEqual( {a:1, b:1 }, { a:2, b:1, 'red':2 });
// const arr2 = { color: [1,2,3], size: ["a"]};
// eqObjects(arr1, arr2);