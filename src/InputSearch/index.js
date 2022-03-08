import "./styles.css";

export default class InputSearch {
  constructor() {}

  render(parentNode) {
    const $inputSearch = document.createElement("input");
    $inputSearch.setAttribute("name", "search");
    $inputSearch.setAttribute("placeholder", "Search…");
    $inputSearch.classList.add("inputSearch");

    parentNode.appendChild($inputSearch);
  }
}
