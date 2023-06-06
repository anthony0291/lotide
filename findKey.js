const assertEqual =(actual, expected) => {
  if (actual === expected) {
   console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
 } else {
   console.log(`❗️❗️❗️ Assertation Failed: ${actual} !== ${expected}`);
 }
};


//Cleaned Up
const findKey = (object, callback) => {
  for (let index of Object.keys(object)) {
      if (callback (object[index]) === true) {
        console.log(index);
        return index;
      }
  }
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2),"noma") // => "noma"
// callback 




//Notes
//function findKey (object, callback)
//scan and return first key that returns a truthy value 
//otherwise return undefined

//First Draft
// const findKey = function (object, callback) {
//   // let keyArray = Object.keys(object);
//   //console.log(`Test: ${keyArray}`);
//   //for each index of key array, if that key value.
//   //console.log(object[i]);
//   for (let i of Object.keys(object)) {
//       if (callback(object[i]) === true) {
//         console.log(i);
//         return i;
//       }
//   // }
//   }
// }
