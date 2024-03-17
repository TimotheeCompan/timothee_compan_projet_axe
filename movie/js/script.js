document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "a3906c9bdd5a2532c87f7eb54d323e4e";
  let currentPage = 1;

  async function fetchFilms(page) {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr-FR&page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    displayFilms(data.results);
  }

  function displayFilms(films) {
    const container = document.getElementById("films-container");
    const template = document.getElementById("film-template");

    // Supprime les cartes précédentes, sauf le template
    container.innerHTML = "";
    container.appendChild(template);

    films.forEach((film) => {
      const filmCard = template.cloneNode(true);
      filmCard.style.display = "block"; // Rend la carte visible
      filmCard.id = ""; // Enlève l'id pour éviter les doublons
      filmCard.querySelector(".film-title").textContent = film.title;
      filmCard.querySelector(".film-description").textContent = film.overview;
      filmCard.querySelector(
        ".film-details-link"
      ).href = `details.html?id=${film.id}`;
      container.appendChild(filmCard);
    });
  }

  document.getElementById("next").addEventListener("click", () => {
    currentPage++;
    fetchFilms(currentPage);
    document.getElementById("current-page").textContent = currentPage;
  });

  document.getElementById("prev").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      fetchFilms(currentPage);
      document.getElementById("current-page").textContent = currentPage;
    }
  });

  fetchFilms(currentPage);
});
