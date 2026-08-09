import { changeColor } from "./colorHelper";
const colors = ["red", "green", "blue", "yellow"];

colors.forEach((color) => {
  const button = document.createElement("button");
  button.textContent = color;

  button.addEventListener("click", () => {
    changeColor(color);
  });

  document.body.appendChild(button);
});