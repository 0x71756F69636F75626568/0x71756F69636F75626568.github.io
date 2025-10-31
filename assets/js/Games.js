export default class Games {
  constructor() {
    this.games = [];
    this.index = 0;
    this.element = null;
  }

  async load() {
    try {
      const response = await fetch("../../data/games.json");
      if (!response.ok) {
        throw new Error("Failed to load games.");
      }
      this.games = await response.json();
    } catch (error) {
      console.error("Fatal: ", error);
    }
  }

  bind() {
    document.getElementById("prev-btn").addEventListener("click", () => this.prev());
    document.getElementById("next-btn").addEventListener("click", () => this.next());
  }

  render() {
    if (!this.element) {
      this.element = document.getElementById("blog-post-1-data");
    }

    const game = this.games[this.index];

    this.element.innerHTML = `
      <img src="assets/images/${game.slug}.webp" alt="${game.slug}">
      <div>
        <h3>${game.name}</h3>
        <p><strong>Genre:</strong> ${game.genre}</p>
        <p><strong>Date de sortie:</strong> ${game.release_date}</p>
        <p>${game.description}</p>
      </div>
    `;
  }

  next() {
    this.index = (this.index + 1) % this.games.length;
    this.render();
  }

  prev() {
    this.index = (this.index - 1 + this.games.length) % this.games.length;
    this.render();
  }
}
