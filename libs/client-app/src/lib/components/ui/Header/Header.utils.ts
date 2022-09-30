import type { LogoStylesOptions } from './Header.types';

export const countLogoTopStyle = ({ centered, small }: LogoStylesOptions) => {
  if (centered) {
    return small ? '40%' : '50%';
  }
  return small ? '60%' : '65%';
};
