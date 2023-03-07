/*
  Instructions: Write a function which can convert the time input 
  given in 12 hours format to 24 hours format. An extra 0 would be 
  needed if the hours have single digit.
*/

/**
 *
 * @param {string} time
 * @returns {string}
 */
const convertTo24HrsFormat = (time) => {
  const timeLower = time.toLowerCase();
  let [hour, mins] = timeLower.split(':');

  if (timeLower.endsWith('am')) {
    hour = hour === '12' ? '00' : hour.padStart(2, '0');
    mins = mins.substring(0, mins.indexOf('am'));
  } else if (timeLower.endsWith('pm')) {
    hour = hour === '12' ? hour : '' + (12 + parseInt(hour));
    mins = mins.substring(0, mins.indexOf('pm'));
  }

  return `${hour}:${mins}`;
};

console.log(convertTo24HrsFormat('12:10AM'));
console.log(convertTo24HrsFormat('5:00AM'));
console.log(convertTo24HrsFormat('12:33PM'));
console.log(convertTo24HrsFormat('01:59PM'));
console.log(convertTo24HrsFormat('11:08PM'));
console.log(convertTo24HrsFormat('10:02PM'));
