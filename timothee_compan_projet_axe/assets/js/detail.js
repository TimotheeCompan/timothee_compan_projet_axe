document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const filmId = params.get("id");

    async function fetchFilm(id) {
      const url = `https://hp-api.lainocs.fr/characters/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      displayCharacters(data);
    }

    function displayCharacters(character) {
      const template = document.getElementById("film-details");

      template.style.display = "block"; // Rend la carte visible
      template.id = ""; // Enlève l'id pour éviter les doublons
      template.querySelector(".film-img").src = character.image;
      template.querySelector(".film-title").textContent = character.name;
      template.querySelector(".film-description").textContent = character.house;
      template.querySelector(".character-wand").textContent = character.wand;
      template.querySelector(".character-blood").textContent = character.blood;
    }

    fetchFilm(filmId);
});
