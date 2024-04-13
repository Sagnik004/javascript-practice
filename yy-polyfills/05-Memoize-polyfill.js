function myMemoize(fn, context) {
  const calculatedResults = {};
  return function (...args) {
    const argsCache = JSON.stringify(args);
    if (!calculatedResults[argsCache]) {
      calculatedResults[argsCache] = fn.call(context || this, ...args);
    }
    return calculatedResults[argsCache];
  }
}

const expensiveMultiply = (num1, num2) => {
  for (let i = 1; i <= 100000000; i++) {}

  return num1 * num2;
};

const memoizedMultiply = myMemoize(expensiveMultiply);

console.time();
console.log(expensiveMultiply(5412, 8430));
console.timeEnd();

console.time();
console.log(expensiveMultiply(5412, 8430));
console.timeEnd();

console.time();
console.log(memoizedMultiply(9800, 4521));
console.timeEnd();

console.time();
console.log(memoizedMultiply(9800, 4521));
console.timeEnd();
