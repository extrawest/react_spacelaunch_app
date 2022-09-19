import type { FontsEnum } from '../../types/enums';

/**
 * Join fonts into string
 * @param fonts
 * @return string of fonts
 */
export const joinFonts = (...fonts: FontsEnum[]): string => {
  return fonts.join(',');
};
