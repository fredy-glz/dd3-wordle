export const checkLetter = (
  letter: string,
  i: number,
  solution: string
): string => {
  if (solution[i] === letter) {
    return 'green';
  }
  if ([...solution.split('')].includes(letter)) {
    return 'yellow';
  }
  return 'gray';
};
