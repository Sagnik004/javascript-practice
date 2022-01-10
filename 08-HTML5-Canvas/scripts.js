/* === DOM Elements === */
const canvas = document.getElementById("draw");

// Set canvas width and height to available window width and height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Get the context of the canvas where we can draw
const ctx = canvas.getContext("2d");
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 20;

// Flag to determine when we are actually drawing. Default is not drawing.
let isDrawing = false;

// Coordinates where line started, and ended
let lastX = 0;
let lastY = 0;
let hue = 0;

// Draw function
function draw(e) {
  if (!isDrawing) return;

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY); // Start from
  ctx.lineTo(e.offsetX, e.offsetY); // Go to
  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
}

/* === Event Listeners === */
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
