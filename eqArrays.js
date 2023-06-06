//eqArrays
const eqArrays = function(num1, num2) {
  let newNum1 = num1;
  let newNum2 = num2;
  if (num1.toString() === num2.toString()) {
    console.log(newNum1 + " === " + newNum2)
    return true;
  } else {
    console.log(newNum1 + " !== " + newNum2);
    return false;
  }
};

module.exports = eqArrays;