// Write a polyfill of lodash "once" method
// https://lodash.com/docs/#once

function onlyOnce(func, context) {
  let ran;
  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }

    return ran;
  }
}

const greeting = onlyOnce(() => console.log('Hello'));
greeting();
greeting();
greeting();
greeting();
greeting();

const hello = onlyOnce((a, b) => console.log(a, b));
hello(2, 9);
hello(12, 3);
hello(3, 3);
hello(5, 96);
