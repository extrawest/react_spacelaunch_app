/**
 * Convert pixels to rems
 * @param px
 * @return rem
 */
export const pxToRem = (px: number): string => {
  return `${px / 16}rem`;
};
