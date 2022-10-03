/**
 * Convert pixels to rems
 * @param {number} px - pixels number
 * @return {string} rem
 */
export const pxToRem = (px: number): string => {
  return `${px / 16}rem`;
};
