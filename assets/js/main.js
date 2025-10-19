import Games from "./Games.js";

document.addEventListener("DOMContentLoaded", () => {
  const games = new Games();
  games.load().then(() => {
    games.bind();
    games.render();
  });
});
