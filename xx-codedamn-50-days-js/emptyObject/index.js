/*
  Instructions: Write a function to check if an object is empty or 
  not in javaScript? Return true only if the input is an object and
  not empty, otherwise return false.
*/

/**
 *
 * @param {Object} obj
 * @returns {boolean}
 */
const isObjectAndNotEmpty = (obj) => {
  // If input is not an object return false
  if (obj.constructor !== Object) {
    return false;
  }

  // If no elements in object then return false
  if (Object.entries(obj).length === 0) {
    return false;
  }

  return true;
};

console.log(isObjectAndNotEmpty({}));
console.log(isObjectAndNotEmpty({ key: 1 }));
