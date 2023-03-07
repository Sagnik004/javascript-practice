/*
  Instructions: Return the N-th value of the Fibonacci sequence.
  Implement both with memoization and without.
*/

/**
 * Find Fibbonacci sequence (without memoization)
 * @param {number} n 
 * @returns {number}
 */
const fibbo = (n) => {
  if (n <= 2) {
    return 1;
  }

  return fibbo(n - 1) + fibbo(n - 2);
};

// console.log(fibbo(6));
// console.log(fibbo(7));
// console.log(fibbo(8));
// console.log(fibbo(50));

/**
 * Find Fibbonacci sequence (with memoization)
 * @param {number} n 
 * @returns {number}
 */
const fibboMemo = (n) => {
  if (n <= 2) {
    return 1;
  }
  if (memoMap.has(n)) {
    return memoMap.get(n);
  }

  memoMap.set(n, fibboMemo(n - 1) + fibboMemo(n - 2));
  return memoMap.get(n);
};

const memoMap = new Map();

console.log(fibboMemo(6));
console.log(fibboMemo(7));
console.log(fibboMemo(8));
console.log(fibboMemo(50));
