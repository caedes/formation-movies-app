import "./styles.css";
import ImdbEntity from "../ImdbEntity";

export default class App {
  constructor() {
    this.entities = [
      { id: 1, title: "The Ring" },
      { id: 2, title: "The Ring 1" },
      { id: 3, title: "The Ring 2, le retour" },
      { id: 4, title: "The Ring 3" },
      { id: 5, title: "The Ring" },
      { id: 6, title: "The Ring" },
      { id: 7, title: "The Ring" },
      { id: 8, title: "The Ring" },
      { id: 9, title: "The Ring" },
      { id: 10, title: "The Ring" },
    ];
  }

  render() {
    const $app = document.createElement("div");
    $app.setAttribute("id", "app");

    document.body.appendChild($app);

    this.entities.map((entity) => {
      new ImdbEntity(entity).render($app);
    });
  }
}
