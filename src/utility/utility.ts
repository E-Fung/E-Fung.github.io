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
