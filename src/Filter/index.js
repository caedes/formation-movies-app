import "./styles.css";

export default class Filter {
  constructor() {}

  render(parentNode) {
    const $filter = document.createElement("div");
    $filter.classList.add("filter");

    const $movieRadio = document.createElement("input");
    $movieRadio.setAttribute("id", "filter-movie");
    $movieRadio.setAttribute("name", "filter");
    $movieRadio.setAttribute("type", "radio");
    $filter.appendChild($movieRadio);

    const $movieLabel = document.createElement("label");
    $movieLabel.classList.add("label");
    $movieLabel.setAttribute("for", "filter-movie");
    $movieLabel.textContent = "Movies";
    $filter.appendChild($movieLabel);

    const $actorRadio = document.createElement("input");
    $actorRadio.setAttribute("id", "filter-actor");
    $actorRadio.setAttribute("name", "filter");
    $actorRadio.setAttribute("type", "radio");
    $filter.appendChild($actorRadio);

    const $actorLabel = document.createElement("label");
    $actorLabel.classList.add("label");
    $actorLabel.setAttribute("for", "filter-actor");
    $actorLabel.textContent = "Actors";
    $filter.appendChild($actorLabel);

    parentNode.appendChild($filter);
  }
}
