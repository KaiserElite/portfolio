//inputs
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

//url for pokemon API
const pokemonAPIURL = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon"

//result outputs
const pokemonName = document.getElementById("pokemon-name");
const pokemonID = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonSprite = document.getElementById("sprite");
const pokemonTypes = document.getElementById("types");

//iterate through stats
const pokemonStatStrings = ["hp", "attack", "defense", "special-attack", "special-defense", "speed"];
//match types to color hex
const typesColorHex = {
  "normal": "#A8A77A",
  "fire": "#EE8130",
  "water": "#6390F0",
  "electric": "#F7D02C",
  "grass": "#7AC74C",
  "ice": "#96D9D6",
  "fighting": "#C22E28",
  "poison": "#A33EA1",
  "ground": "#E2BF65",
  "flying": "#A98FF3",
  "psychic": "#F95587",
  "bug": "#A6B91A",
  "rock": "#B6A136",
  "ghost": "#735797",
  "dragon": "#6F35FC",
  "dark": "#705746",
  "steel": "#B7B7CE",
  "fairy": "#D685AD"
}

const loadPokemonAPI = async () =>
{
  try{
    const res = await fetch(pokemonAPIURL);
    const data = await res.json();
    findPokemon(data);
  }
  catch (err)
  {
    console.log(err);
  }
}

const resetStats = () => {
  pokemonName.innerText = "";
  pokemonID.innerText = "";
  pokemonWeight.innerText = "";
  pokemonHeight.innerText = "";
  pokemonSprite.src = "";
  pokemonTypes.innerHTML = "";
  for (const statString of pokemonStatStrings)
  {
    document.getElementById(statString).innerText = "";
  }
}

const displayStats = ({height, id, name, sprites, stats, types, weight}) => {
  pokemonName.innerText = name.toUpperCase();
  pokemonID.innerText = `#${id}`;
  pokemonWeight.innerText = `Weight: ${weight}`;
  pokemonHeight.innerText = `Height: ${height}`;
  pokemonSprite.src = sprites["front_default"];
  for (const i in types)
  {
    pokemonTypes.innerHTML += `<li style="background: ${typesColorHex[types[i].type.name]}">${types[i].type.name}</li>`
  }
  for (const i in stats)
  {
    document.getElementById(stats[i].stat.name).innerText = stats[i].base_stat;
  }
};

const getStats = async ({url}) => {
  try{
    const res = await fetch(url);
    const data = await res.json();
    displayStats(data);
  }
  catch (err)
  {
    console.log(err);
  }
};

const findPokemon = (pokemonAPI) =>
{
  //tests if searchInput is a int
  let pokemonData = undefined;
  resetStats();
  if (!isNaN(Number(searchInput.value)))
  {
    pokemonData = pokemonAPI.results[searchInput.value - 1];
  }
  else
  {
    const pokemonSearch = searchInput.value.toLowerCase();
    pokemonData = pokemonAPI.results.find(({name}) => name === pokemonSearch);
  }
  if (pokemonData === undefined)
  {
    alert("Pokémon not found")
    return;
  }
  getStats(pokemonData);
};

searchButton.addEventListener("click", loadPokemonAPI);
searchInput.addEventListener("keydown", (e) =>{
  if (e.key == "Enter")
  {
    loadPokemonAPI();
  }
})