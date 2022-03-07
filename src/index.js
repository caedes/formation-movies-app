import _ from "lodash";

import "./style.css";
import { version } from "../package.json";
import Dices from "./dices.png";
import printMe from "./print.js";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "Romain", `v${version}`], " ");
  element.classList.add("hello");

  const $dices = new Image();
  $dices.src = Dices;

  element.appendChild($dices);

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
