import { increment, decrement } from "./counterMath";

let count = 0;

const counter = document.getElementById("counter") as HTMLHeadingElement;

const buttons = [
  {
    text: "Increment",
    operation: increment,
  },
  {
    text: "Decrement",
    operation: decrement,
  },
];

buttons.forEach(({ text, operation }) => {
  const button = document.createElement("button");
  button.textContent = text;

  button.addEventListener("click", () => {
    count = operation(count);
    counter.textContent = count.toString();
  });

  document.body.appendChild(button);
});