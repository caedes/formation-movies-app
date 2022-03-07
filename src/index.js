import _ from "lodash";

import "./style.css";
import { version } from "../package.json";
import Dices from "./dices.png";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "Romain", `v${version}`], " ");
  element.classList.add("hello");

  const $dices = new Image();
  $dices.src = Dices;

  element.appendChild($dices);

  return element;
}

document.body.appendChild(component());
