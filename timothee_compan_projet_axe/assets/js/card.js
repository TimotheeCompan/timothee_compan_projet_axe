document.addEventListener("DOMContentLoaded", function () {
  async function fetchFilms(page) {
    const url = `https://hp-api.lainocs.fr/characters/`;
    const response = await fetch(url);
    const data = await response.json();
    displayCharacters(data);
  }

  function displayCharacters(characters) {
    const container = document.getElementById("character-container");
    const template = document.getElementById("character-template");

    // Supprime les cartes précédentes, sauf le template
    container.innerHTML = "";
    container.appendChild(template);

    characters.forEach((character) => {
      const characterCard = template.cloneNode(true);
      characterCard.style.display = "block"; // Rend la carte visible
      characterCard.id = ""; // Enlève l'id pour éviter les doublons
      characterCard.querySelector(".film-title").textContent = character.name;
      characterCard.querySelector(".film-img").src = character.image;
      characterCard.querySelector(".film-description").textContent =
        character.house;
      characterCard.querySelector(
        ".film-details-link"
      ).href = `details.html?id=${character.slug}`;
      container.appendChild(characterCard);
    });
  }

  fetchFilms();
});
