// const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("takes ['Hello', 'Lighthouse', 'Labs'] and returns ['Lighthouse', 'Labs']", () => {
    const result = ["Hello", 'Lighthouse', 'Labs'];
    assert.deepEqual(tail(result), ['Lighthouse', 'Labs']);
  });
});






// //Test Code
// const result = tail(["Hello", "Lighthouse", "Labs",'Beena',1,2,3]);
// assertEqual(result, 2); // ensure we get back two elements
// assertEqual(result, "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result, "Labs"); // ensure second element is "Labs"
