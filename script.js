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
        <div class="pokemon-container">
            <h2>${pokemon.name}</h2>
            <div class="pokemon-details">
                <div class="pokemon-detail-box box-red-shadow">
                    <p><strong>ID</strong><br>${pokemon.id}</p>
                </div>
                <div class="pokemon-detail-box box-red-shadow">
                    <p><strong>Height</strong><br>${pokemon.height}</p>
                </div>
                <div class="pokemon-detail-box box-red-shadow">
                    <p><strong>Weight</strong><br>${pokemon.weight}</p>
                </div>
                <div class="pokemon-detail-box box-red-shadow">
                    <p><strong>Abilities</strong><br>${pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
                </div>
                <div class="pokemon-detail-box box-red-shadow">
                    <p><strong>Types</strong><br>${pokemon.types.map(type => type.type.name).join(', ')}</p>
                </div>
            </div>
            <div class="pokemon-stats-container box-red-shadow">
                <p><strong>Stats</strong></p>
                <ul class="pokemon-stats">
                    ${pokemon.stats.map(stat => `<li>${stat.stat.name}: ${stat.base_stat}</li>`).join('')}
                </ul>
            </div>
            <div class="pokemon-image box-red-shadow">
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            </div>
        </div>
    `;
    document.getElementById('pokemon-info').innerHTML = pokemonInfo;
}
