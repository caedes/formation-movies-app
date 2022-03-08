import "./styles.css";
import ImdbEntity from "../ImdbEntity";

export default class App {
  constructor() {}

  render() {
    const $app = document.createElement("div");
    $app.setAttribute("id", "app");

    document.body.appendChild($app);

    new ImdbEntity().render($app);
  }
}
