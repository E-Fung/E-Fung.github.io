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

export const getPokeScheme = (pokeTypes: pokeType[]): string => {
  let left: string = matchColor(pokeTypes[0].type.name);
  let right: string = pokeTypes.length >= 2 ? matchColor(pokeTypes[1].type.name) : left;
  return `linear-gradient( to right, ${left}, ${right})`;
};

export const matchColor = (type: string): string => {
  switch (type) {
    case 'none':
      return 'white';
    case 'fire':
      return 'rgb(240, 128, 48, 0.35)';
    case 'grass':
      return 'rgb(120, 200, 80, 0.35)';
    case 'ground':
      return 'rgb(224, 192, 104, 0.35)';
    case 'bug':
      return 'rgb(168, 184, 32, 0.35)';
    case 'dark':
      return 'rgb(112, 88, 72, 0.35)';
    case 'dragon':
      return 'rgb(112, 56, 248, 0.35)';
    case 'electric':
      return 'rgb(248, 208, 48, 0.35)';
    case 'fairy':
      return 'rgb(238, 153, 172, 0.35)';
    case 'fighting':
      return 'rgb(192, 48, 40, 0.35)';
    case 'flying':
      return 'rgb(168, 144, 240, 0.35)';
    case 'ghost':
      return 'rgb(112, 88, 152, 0.35)';
    case 'ice':
      return 'rgb(152, 216, 216, 0.35)';
    case 'normal':
      return 'rgb(168, 168, 120, 0.35)';
    case 'poison':
      return 'rgb(160, 64, 160, 0.35)';
    case 'psychic':
      return 'rgb(248, 88, 136, 0.35)';
    case 'rock':
      return 'rgb(184, 160, 56, 0.5)';
    case 'steel':
      return 'rgb(184, 184, 208, 0.35)';
    case 'water':
      return 'rgb(104, 144, 240, 0.35)';
    default:
      return 'white';
  }
};
