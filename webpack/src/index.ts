import "./style.css";
import { add } from "./math";

const heading = document.createElement("h1");
heading.textContent = `Sum = ${add(10, 20)}`;

document.body.appendChild(heading);