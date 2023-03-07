/*
  Instructions: Write a function which accepts two valid dates 
  and returns the difference between them as number of days.
*/

const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

/**
 * 
 * @param {string} dateText1 
 * @param {string} dateText2 
 * @returns {number}
 */
const getDaysBetweenDates = (dateText1, dateText2) => {
  const date1 = Date.parse(dateText1);
  const date2 = Date.parse(dateText2);
  if (isNaN(date1) || isNaN(date2)) {
    return -1;
  }

  const diffTime = Math.abs(date2 - date1);
  const dateDays = Math.ceil(diffTime / DAY_IN_MILLISECONDS);
  return dateDays;
};

console.log(getDaysBetweenDates('10/15/2020', '12/1/2020'));
console.log(getDaysBetweenDates('11/10/2021', '11/12/2021'));
console.log(getDaysBetweenDates('11/01/2020', '11/05/2020'));
console.log(getDaysBetweenDates());
