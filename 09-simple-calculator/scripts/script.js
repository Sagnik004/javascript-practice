/* DOM Elements */
const display = document.getElementById('display');
const buttons = [...document.getElementsByClassName('button')];

/* Functions */
function clearDisplay() {
  display.innerText = '';
}

/* Event Listeners */
buttons.map((button) => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.innerText;
    switch (buttonText) {
      case 'C':
        clearDisplay();
        break;
      case '←':
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      default:
        display.innerText += buttonText;
    }
  });
});

clearDisplay();
