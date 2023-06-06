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

// const eqObjects = function(object1, object2) {
//   let objArray1 = Object.keys(object1);
//   let objArray2 = Object.keys(object2);
//   console.log(objArray1); console.log(objArray2);

  
//   if (objArray1.length === objArray2.length) {
//     for (const keys of objArray1) {
      
//       if (Array.isArray(object1[keys])) {
//         console.log(object1[keys]); console.log(object2[keys]);
//         assertEqual(eqArrays(object1[keys], object2[keys]), true);
        
//       } else if (object1[keys] !== object2[keys]) {
//         return false;
//       }
//     } return true;
//   } else {
//     return false;
//   }
// };

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



//Test

const shirtObject = { color: [1,2,3], size: ["a"] };
const anotherShirtObject = { size: ["a"], color: [1,2,3] };
eqObjects(shirtObject , anotherShirtObject); // => true

// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => false



// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

// const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false