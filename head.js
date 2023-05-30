//Function Implementation
//make function compare two values it takes in and print out a message saying if they match or not.


//Assert Equal
const assertEqual = function(actual, expected) {
  // let ass = 'Assertation'
  // let act = actual;
  // let exp = expected;

  if (actual === expected) {
    console.log(`✅✅✅---> Assertation Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌---> Assertation Failed:  ${actual} !== ${expected}`);
  }
};

//New Head function
const head = function(head) {
  let actual = head.shift()
  return actual;
};



//Test Code

assertEqual(head([1,2]),1);
assertEqual(head([7,5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

//calls the assertEqual function