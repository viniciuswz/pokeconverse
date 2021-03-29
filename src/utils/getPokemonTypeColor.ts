import {TPokemon} from '../typescript/types/TPokemon';

const getPokemonTypeColor = (type: TPokemon) => {
  switch (type) {
    case 'fire':
      return '#FA5543';
    case 'water':
      return '#6890F0';
    case 'grass':
      return '#8BD650';
    case 'eletric':
      return '#F8D030';
    case 'ice':
      return '#98D8D8';
    case 'ground':
      return '#E0C068';
    case 'flying':
      return '#A890F0';
    case 'poison':
      return '#A040A0';
    case 'fighting':
      return '#C03028';
    case 'psychic':
      return '#F85888';
    case 'dark':
      return '#705848';
    case 'rock':
      return '#B8A038';
    case 'bug':
      return '#A8B820';
    case 'ghost':
      return '#705898';
    case 'steel':
      return '#B8B8D0';
    case 'dragon':
      return '#7038F8';
    case 'fairy':
      return '#FFAEC9';
    default:
      return '#A8A878';
  }
};

export default getPokemonTypeColor;
