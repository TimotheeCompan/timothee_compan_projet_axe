document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "a3906c9bdd5a2532c87f7eb54d323e4e";

  const params = new URLSearchParams(window.location.search);
  const filmId = params.get("id");

  async function fetchFilm(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=fr-FR`;
    const response = await fetch(url);
    const data = await response.json();
    displayFilm(data);
  }

  function displayFilm(film) {
    const template = document.getElementById("film-details");

    template.style.display = "block"; // Rend la carte visible
    template.id = ""; // Enlève l'id pour éviter les doublons
    template.querySelector(".film-title").textContent = film.title;
    template.querySelector(".film-description").textContent = film.overview;
  }

  fetchFilm(filmId);
});
