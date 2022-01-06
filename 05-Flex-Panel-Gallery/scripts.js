/*
  DOM ELEMENTS
*/
const panels = document.querySelectorAll(".panel");

/*
  FUNCTIONS
*/
const handlePanelClick = function () {
  this.classList.toggle("open");
};

const handlePanelTransitionEnd = function (e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
};

/*
  EVENT LISTENERS
*/
panels.forEach((panel) => {
  panel.addEventListener("click", handlePanelClick);
});

panels.forEach((panel) => {
  panel.addEventListener("transitionend", handlePanelTransitionEnd);
});
