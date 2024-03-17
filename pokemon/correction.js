document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("pokemon-form");
  const select = document.getElementById("pokemon-select");

  const displayPokemon = (data) => {
    document.getElementById("pokemon-name").textContent = `Nom: ${data.name}`;
    document.getElementById("pokemon-image").src = data.sprites.front_default;
    const types = data.types.map((type) => type.type.name).join(", ");
    document.getElementById("pokemon-type").textContent = `Type(s): ${types}`;
    document.getElementById("pokemon-weight").textContent = `Poids: ${
      data.weight / 10
    } kg`;
    document.getElementById("pokemon-height").textContent = `Taille: ${
      data.height / 10
    } m`;

    const abilities = data.abilities
      .map((ability) => ability.ability.name)
      .join(", ");
    document.getElementById(
      "pokemon-abilities"
    ).textContent = `Capacités: ${abilities}`;
  };

  const fetchPokemon = async (pokemonName) => {
    const link = "https://pokeapi.co/api/v2/pokemon/" + pokemonName;
    const repsonse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    const data = await repsonse.json();

    displayPokemon(data);
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const selectedPokemon = select.value;
    fetchPokemon(selectedPokemon);
  });

  fetchPokemon("pikachu");
});
