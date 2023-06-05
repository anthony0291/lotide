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




// const eqArrays =(array1, array2) => {
//   if (array1.length === array2.length) {
//     for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// }
// };