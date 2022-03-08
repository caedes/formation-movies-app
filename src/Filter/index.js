import "./styles.css";

export default class Filter {
  constructor() {}

  render(parentNode) {
    const $filter = document.createElement("div");
    $filter.classList.add("filter");

    this.$movieRadio = document.createElement("input");
    this.$movieRadio.setAttribute("id", "filter-movie");
    this.$movieRadio.setAttribute("name", "filter");
    this.$movieRadio.setAttribute("type", "radio");
    this.$movieRadio.value = "Title";
    $filter.appendChild(this.$movieRadio);

    const $movieLabel = document.createElement("label");
    $movieLabel.classList.add("label");
    $movieLabel.setAttribute("for", "filter-movie");
    $movieLabel.textContent = "Movies";
    $filter.appendChild($movieLabel);

    this.$actorRadio = document.createElement("input");
    this.$actorRadio.setAttribute("id", "filter-actor");
    this.$actorRadio.setAttribute("name", "filter");
    this.$actorRadio.setAttribute("type", "radio");
    this.$actorRadio.value = "Name";
    $filter.appendChild(this.$actorRadio);

    const $actorLabel = document.createElement("label");
    $actorLabel.classList.add("label");
    $actorLabel.setAttribute("for", "filter-actor");
    $actorLabel.textContent = "Actors";
    $filter.appendChild($actorLabel);

    parentNode.appendChild($filter);
  }
}
