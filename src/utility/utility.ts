import { pokeType } from '../model/pokeModels';

export const capFirstLetter = (name: string): string => {
  let result = name;

  result = result
    .split(' ')
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(' ');
  result = result
    .split('-')
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join('-');

  return result;
};

export const getPokeScheme = (pokeTypes: pokeType[], opacity: string): string => {
  let left: string = matchColor(pokeTypes[0].type.name, opacity);
  let right: string = pokeTypes.length >= 2 ? matchColor(pokeTypes[1].type.name, opacity) : left;
  return `linear-gradient( to right, ${left}, ${right})`;
};

export const matchColor = (type: string, opacity: string): string => {
  switch (type) {
    case 'none':
      return 'white';
    case 'fire':
      return `rgb(240, 128, 48, ${opacity})`;
    case 'grass':
      return `rgb(120, 200, 80, ${opacity})`;
    case 'ground':
      return `rgb(224, 192, 104, ${opacity})`;
    case 'bug':
      return `rgb(168, 184, 32, ${opacity})`;
    case 'dark':
      return `rgb(112, 88, 72, ${opacity})`;
    case 'dragon':
      return `rgb(112, 56, 248, ${opacity})`;
    case 'electric':
      return `rgb(248, 208, 48, ${opacity})`;
    case 'fairy':
      return `rgb(238, 153, 172, ${opacity})`;
    case 'fighting':
      return `rgb(192, 48, 40, ${opacity})`;
    case 'flying':
      return `rgb(168, 144, 240, ${opacity})`;
    case 'ghost':
      return `rgb(112, 88, 152, ${opacity})`;
    case 'ice':
      return `rgb(152, 216, 216, ${opacity})`;
    case 'normal':
      return `rgb(168, 168, 120, ${opacity})`;
    case 'poison':
      return `rgb(160, 64, 160, ${opacity})`;
    case 'psychic':
      return `rgb(248, 88, 136, ${opacity})`;
    case 'rock':
      return `rgb(184, 160, 56, ${opacity})`;
    case 'steel':
      return `rgb(184, 184, 208, ${opacity})`;
    case 'water':
      return `rgb(104, 144, 240, ${opacity})`;
    default:
      return 'white';
  }
};
