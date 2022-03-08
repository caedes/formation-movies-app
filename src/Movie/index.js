import ImdbEntity from "../ImdbEntity";

export default class Movie extends ImdbEntity {
  constructor(entity) {
    super(entity);
  }

  renderTitle() {
    const $imdbEntityTitle = document.createElement("h3");
    $imdbEntityTitle.textContent = `🎬 ${this.title}`;
    this.$imdbEntity.appendChild($imdbEntityTitle);
  }
}
