//Assert Equal
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅---> Assertation Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌---> Assertation Failed:  ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let newArray = array;
  newArray.splice(0,1);
  console.log(newArray);
  return newArray;
 
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"


//New Head function
// const head = function(head) {
//   let actual = head.shift()
//   return actual;
// };