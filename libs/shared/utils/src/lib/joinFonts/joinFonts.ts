/**
 * Join destructured fonts array into string
 * @param {Array<string>} fonts - destructured fonts array
 * @return {string} string of fonts
 */
export const joinFonts = (...fonts: string[]): string => {
  return fonts.join(',');
};
