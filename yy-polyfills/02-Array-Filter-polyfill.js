Array.prototype.myFilter = function (cb) {
  // If not an array then return back
  if (!Array.isArray(this)) return;

  // If no function then return
  if (!cb) return;

  // If not a function then return
  if (typeof cb !== 'function') return;

  const resArr = [];
  for (let i=0; i<this.length; i++) {
    if (cb(this[i], i, this)) {
      resArr.push(this[i]);
    }
  }

  return resArr;
};

const arr = [1, 2, 3, 4, 5];

const op1 = arr.myFilter((el) => el > 3);
const op2 = arr.filter((el) => el > 3);
console.log(op1, op2);

const op3 = arr.myFilter((el) => el <= 4);
const op4 = arr.filter((el) => el <= 4);
console.log(op3, op4);
