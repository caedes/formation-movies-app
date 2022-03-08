import "./styles.css";
import Actor from "../Actor";
import Filter from "../Filter";
import InputSearch from "../InputSearch";
import Movie from "../Movie";
import { moviesFetch, responseToJson } from "../lib";
import ResultText from "../ResultText";

export default class App {
  constructor() {
    this.entities = [];
  }

  render() {
    this.$app = document.createElement("div");
    this.$app.setAttribute("id", "app");

    document.body.appendChild(this.$app);

    const $appTitle = document.createElement("h1");
    $appTitle.textContent = "Movies App";
    $appTitle.classList.add("appTitle");
    this.$app.appendChild($appTitle);

    const inputSearch = new InputSearch();
    inputSearch.render(this.$app);
    const filter = new Filter();
    filter.render(this.$app);
    new ResultText().render(this.$app);

    this.$entityList = document.createElement("ul");
    this.$entityList.classList.add("entityList");

    this.fetchEntities();

    document.addEventListener("keyup", () => {
      const inputValue = inputSearch.getInputNode().value;

      this.fetchEntities({ inputValue });
    });

    [filter.$actorRadio, filter.$movieRadio].forEach(($radio) => {
      $radio.addEventListener("change", () => {
        this.fetchEntities({ filter: $radio.value });
      });
    });

    this.$app.appendChild(this.$entityList);
  }

  fetchEntities(options = {}) {
    const queryParams = [
      options.inputValue?.length >= 3 ? `q=${options.inputValue}` : null,
      options.filter ? `resultType=${options.filter}` : null,
    ]
      .filter((a) => a)
      .join("&");

    moviesFetch(`/entities?${queryParams}`)
      .then(responseToJson)
      .then((entities) => (this.entities = entities))
      .then(this.renderEntitiesMessage)
      .then(this.renderEntities);
  }

  renderEntitiesMessage = () => {
    document.getElementById("resultEntities")?.remove();

    if (this.entities.length === 0) {
      const $resultEntities = document.createElement("p");
      $resultEntities.setAttribute("id", "resultEntities");
      $resultEntities.textContent = "No entity to display.";
      this.$app.appendChild($resultEntities);
    }
  };

  renderEntities = () => {
    this.$entityList.textContent = "";

    this.entities.map((entity) => {
      const imdbEntity =
        entity.resultType === "Title" ? new Movie(entity) : new Actor(entity);
      imdbEntity.render(this.$entityList);
    });
  };
}
