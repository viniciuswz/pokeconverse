import {TPokemon} from '../typescript/types/TPokemon';

const getPokemonTypeColor = (type: TPokemon) => {
  const pokemonColors = {
    fire: '#FA5543',
    water: '#6890F0',
    grass: '#8BD650',
    eletric: '#F8D030',
    ice: '#98D8D8',
    ground: '#E0C068',
    flying: '#A890F0',
    poison: '#A040A0',
    fighting: '#C03028',
    psychic: '#F85888',
    dark: '#705848',
    rock: '#B8A038',
    bug: '#A8B820',
    ghost: '#705898',
    steel: '#B8B8D0',
    dragon: '#7038F8',
    fairy: '#FFAEC9',
  }

  return pokemonColors[type] || '#A8A878';
};

export default getPokemonTypeColor;
