/*
  DOM Elements
*/
const inputs = document.querySelectorAll(".controls input");

/*
  Functions
*/
function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    `${this.value}${suffix}`
  );
}

/*
  Event Listeners
*/
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
