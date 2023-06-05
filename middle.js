//middle

// take in array       [1,2,3,4,5,6]
const middle = function(array) {
  let middleOnly = [];
  let arrayMiddle = array.length / 2;
  
  if (array.length % 2 === 0 && array.length > 2) {
    //even
    middleOnly = array.slice((arrayMiddle - 1), (arrayMiddle + 1));
    console.log(middleOnly);
    return middleOnly;
  } else if (array.length % 2 !== 0 && array.length > 2) {
    //odd
    middleOnly = array.slice(arrayMiddle, (arrayMiddle + 1));
    console.log(middleOnly);
    return middleOnly;
  } else if (array.length <= 2) {
    console.log(middleOnly);
    return middleOnly;
  }
};

module.exports = middle;