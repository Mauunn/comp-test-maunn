async function fetchPokemonInfo() {
    const pokemonName = document.getElementById('pokemon-name').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Pokémon not found');
        }
        const data = await response.json();
        displayPokemonInfo(data);
    } catch (error) {
        document.getElementById('pokemon-info').innerHTML = `<p>${error.message}</p>`;
    }
}

function displayPokemonInfo(pokemon) {
    const pokemonInfo = `
        <h2>${pokemon.name}</h2>
        <p><strong>ID:</strong> ${pokemon.id}</p>
        <p><strong>Height:</strong> ${pokemon.height}</p>
        <p><strong>Weight:</strong> ${pokemon.weight}</p>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    `;
    document.getElementById('pokemon-info').innerHTML = pokemonInfo;
}
