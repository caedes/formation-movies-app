import "./styles.css";

export default class ImdbEntity {
  constructor({ id, title }) {
    this.id = id;
    this.title = title;
  }

  render(parentNode) {
    const $imdbEntity = document.createElement("div");
    $imdbEntity.setAttribute("id", `entity-${this.id}`);
    $imdbEntity.classList.add("imdbEntities");

    const imdbEntityImg = new Image();
    imdbEntityImg.src = `https://picsum.photos/200/300?grayscale&random=${this.id}`;
    $imdbEntity.appendChild(imdbEntityImg);

    const $imdbEntityTitle = document.createElement("h3");
    $imdbEntityTitle.textContent = this.title;
    $imdbEntity.appendChild($imdbEntityTitle);

    parentNode.appendChild($imdbEntity);
  }
}
