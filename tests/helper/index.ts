export const randomInt = (n: number): number => Math.floor(Math.random() * n);

export const shuffle = (a: string[]): string[] => {
	const array = a.slice();
  let current = array.length;
  let temp, rand;
  while (0 !== current) {
    rand = randomInt(current);
    current -= 1;
    temp = array[current];
    array[current] = array[rand];
    array[rand] = temp;
  }
  return array;
};
