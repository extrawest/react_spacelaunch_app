/**
 * Join fonts into string
 * @param fonts
 * @return string of fonts
 */
export const joinFonts = (...fonts: string[]): string => {
  return fonts.join(',');
};
