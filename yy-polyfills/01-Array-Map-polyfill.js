Array.prototype.myMap = function (cb) {
  // If not an array then return back
  if (!Array.isArray(this)) return;

  // If no function then return
  if (!cb) return;

  // If not a function then return
  if (typeof cb !== 'function') return;

  const resultArr = [];
  for (let i = 0; i < this.length; i++) {
    resultArr.push(cb(this[i], i, this));
  }

  return resultArr;
};

const arr = [1, 2, 3, 4, 5];

const res1 = arr.myMap((el) => el * 2);
const res2 = arr.map((el) => el * 2);
console.log(res1, res2);

const res3 = arr.myMap((el) => el * 3);
const res4 = arr.map((el) => el * 3);
console.log(res3, res4);
