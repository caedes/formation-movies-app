import "./styles.css";

export default class InputSearch {
  constructor() {}

  render(parentNode) {
    this.$inputSearch = document.createElement("input");
    this.$inputSearch.setAttribute("name", "search");
    this.$inputSearch.setAttribute("placeholder", "Search…");
    this.$inputSearch.setAttribute("autocomplete", "off");
    this.$inputSearch.classList.add("inputSearch");

    parentNode.appendChild(this.$inputSearch);
  }

  getInputNode() {
    return this.$inputSearch;
  }
}
