/****************
 * DOM Elements
 */
const keys = document.querySelector(".keys");

/****************
 * Functions
 */
function handleKeydownEvent(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) {
    return;
  }

  audio.currentTime = 0; // Rewind to start
  audio.play();

  key.classList.add("playing");
}

function handleRemoveTransition(e) {
  if (e.propertyName !== "transform") {
    return;
  }

  e.target.classList.remove("playing");
}

/****************
 * Event Listeners
 */
window.addEventListener("keydown", handleKeydownEvent);
keys.addEventListener("transitionend", handleRemoveTransition);
