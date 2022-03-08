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

    new InputSearch().render(this.$app);
    new Filter().render(this.$app);
    new ResultText().render(this.$app);

    this.$entityList = document.createElement("ul");
    this.$entityList.classList.add("entityList");

    moviesFetch("/entities")
      .then(responseToJson)
      .then((entities) => (this.entities = entities))
      .then(this.renderEntitiesMessage)
      .then(this.renderEntities);

    this.$app.appendChild(this.$entityList);
  }

  renderEntitiesMessage = () => {
    if (this.entities.length === 0) {
      const $resultEntities = document.createElement("p");
      $resultEntities.textContent = "No entity to display.";
      this.$app.appendChild($resultEntities);
    }
  };

  renderEntities = () => {
    this.entities.map((entity) => {
      const imdbEntity =
        entity.resultType === "Title" ? new Movie(entity) : new Actor(entity);
      imdbEntity.render(this.$entityList);
    });
  };
}
