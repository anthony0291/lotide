//Function Implementation
//make function compare two values it takes in and print out a message saying if they match or not.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('😍😍😍' + 'Assertation Passed: ' + actual + ' === ' + expected);
  } else {
    console.log("🚀🚀🚀" + 'Assertation Failed: ' + actual + ' !== ' + expected);
  }
};

//Test Code
assertEqual("Lighhouse Labs", "BootCamp");
assertEqual(1, 1);
assertEqual(1,3,4);
assertEqual(1,"One");
assertEqual(2,'2');