import "./styles.css";
import InputSearch from "../InputSearch";
import Filter from "../Filter";
import ResultText from "../ResultText";
import Movie from "../Movie";
import Actor from "../Actor";

export default class App {
  constructor() {
    this.entities = [
      { id: 1, title: "The Ring", resultType: "Title" },
      { id: 2, title: "The Ring 1", resultType: "Name" },
      { id: 3, title: "The Ring 2, le retour", resultType: "Title" },
      { id: 4, title: "The Ring 3", resultType: "Name" },
      { id: 5, title: "The Ring", resultType: "Title" },
      { id: 6, title: "The Ring", resultType: "Title" },
      { id: 7, title: "The Ring", resultType: "Name" },
      { id: 8, title: "The Ring", resultType: "Title" },
      { id: 9, title: "The Ring", resultType: "Name" },
      { id: 10, title: "The Ring", resultType: "Title" },
    ];
  }

  render() {
    const $app = document.createElement("div");
    $app.setAttribute("id", "app");

    document.body.appendChild($app);

    const $appTitle = document.createElement("h1");
    $appTitle.textContent = "Movies App";
    $appTitle.classList.add("appTitle");
    $app.appendChild($appTitle);

    new InputSearch().render($app);
    new Filter().render($app);
    new ResultText().render($app);

    this.entities.map((entity) => {
      const imdbEntity =
        entity.resultType === "Title" ? new Movie(entity) : new Actor(entity);
      imdbEntity.render($app);
    });
  }
}
