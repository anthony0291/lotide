const assertArraysEqual = require('../assertArraysEqual');

//eqArrays
const eqArrays = require('../eqArrays');


//Test Code
console.log("-------");
assertArraysEqual(eqArrays([1,2,3,5],[1,2,3]));
console.log("-------");
assertArraysEqual(eqArrays([1,2,3],[1,2,3]));
console.log("-------");
assertArraysEqual(eqArrays(["h","e","l","l","o"], [1,2,3]));
console.log("-------");
assertArraysEqual(eqArrays(["h","e","l","l","o"], ["h","e","l","l","o"]));

