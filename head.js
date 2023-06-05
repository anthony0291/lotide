//head

const head = head => {
  if (head.length < 0) {
    return undefined;
  } 
  return head[0]  ;
};

module.exports = head;
