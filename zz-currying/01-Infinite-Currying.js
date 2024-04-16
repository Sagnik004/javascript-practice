function sum(a) {
  return function (b) {
    if (b) return sum(a + b);
    return a;
  }
}

console.log(sum(1)(5)());
console.log(sum(3)(7)(8)(6)());
console.log(sum(3)(7)(8)(6)(5)(4)(9)(12)());
