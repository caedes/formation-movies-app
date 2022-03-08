import "./styles.css";

export default class ResultText {
  constructor() {}

  render(parentNode) {
    const $resultText = document.createElement("p");
    $resultText.textContent = "7 résultats (4 films, 3 acteurs)";
    $resultText.classList.add("resultText");

    parentNode.appendChild($resultText);
  }
}
