const eqArrays = require('../eqArrays');
const assert = require('chai').assert;
//const assertArraysEqual = require('../assertArraysEqual');

//middle
const middle = require('../middle');

describe("#middle", () => {
  it('should return [2] for [1,2,3]', () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });
});

describe("#middle", () => {
  it('should return [3,4] for [1,2,3,4,5,6]', () => {
    assert.deepEqual(middle([1,2,3,4,5,6]), [3,4]);
  });
});

describe("#middle", () => {
  it('should return [3] for [1,2,3,4,5]', () => {
    assert.deepEqual(middle([1,2,3,4,5]), [3]);
  });
});

//Test Code
//assertArraysEqual(eqArrays(middle([1,2,3]), [2])); // => [2]
// assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]));
// assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3,4]));
// assertArraysEqual(eqArrays(middle([1,3,4]), [2,3]));