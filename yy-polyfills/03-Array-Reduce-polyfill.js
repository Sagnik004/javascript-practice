Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue;

  for (let i=0; i<this.length; i++) {
    if (acc === undefined) {
      acc = this[0];
    } else {
      acc = cb(acc, this[i], i, this);
    }
  }

  return acc;
};

const arr = [1,2,3,4,5];
const op1 = arr.myReduce((acc, cur) => acc + cur, 0);
const op2 = arr.reduce((acc, cur) => acc + cur, 0);
console.log(op1, op2);

const arr2 = ['a','p','p','l','e'];
const op3 = arr2.myReduce((acc, cur) => acc + cur);
const op4 = arr2.reduce((acc, cur) => acc + cur);
console.log(op3, op4);
