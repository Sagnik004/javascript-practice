/****************
 * DOM Elements
 */
const secondsHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");

/****************
 * Functions
 */

function updateHand(el, deg) {
  el.style.transform = `rotate(${deg}deg)`;
}

function setDate() {
  const now = new Date();

  // Update seconds hand
  const seconds = now.getSeconds();
  const secondsDegree = Math.floor((seconds / 60) * 360 + 90);
  updateHand(secondsHand, secondsDegree);

  // Update minutes hand
  const minutes = now.getMinutes();
  const minutesDegree = Math.floor((minutes / 60) * 360 + 90);
  updateHand(minutesHand, minutesDegree);

  // Update hour hand
  const hours = now.getHours();
  const hoursDegree = Math.floor((hours / 12) * 360 + 90);
  updateHand(hoursHand, hoursDegree);
}

/****************
 * Event Listeners
 */
setInterval(setDate, 1000);
