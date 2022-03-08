import "./styles.css";

export default class ImdbEntity {
  constructor() {}

  render(parentNode) {
    const $imdbEntity = document.createElement("div");
    $imdbEntity.classList.add("imdbEntities");

    const imdbEntityImg = new Image();
    imdbEntityImg.src = "https://picsum.photos/200/300?grayscale";
    $imdbEntity.appendChild(imdbEntityImg);

    const $imdbEntityTitle = document.createElement("h3");
    $imdbEntityTitle.textContent = "The Ring";
    $imdbEntity.appendChild($imdbEntityTitle);

    parentNode.appendChild($imdbEntity);
  }
}
