//Tail Test

const tail = array => {
  let newArray = array;
  newArray.splice(0,1);
  return newArray;
};

module.exports = tail;
