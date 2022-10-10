/**
 * Generate a range array
 * @param {number} n - number of elements
 * @returns {Array<number>} array of range numbers
 */
export const range = (n: number) => {
  const arr: number[] = [];

  for (let i = 0; i < n; i++) {
    arr.push(i);
  }

  return arr;
};
