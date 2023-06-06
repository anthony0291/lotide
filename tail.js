//Tail
const tail = (array) => {
  let newArray = array;
  newArray.splice(0,1);
  console.log (newArray);
  return newArray;
};

module.exports = tail;
