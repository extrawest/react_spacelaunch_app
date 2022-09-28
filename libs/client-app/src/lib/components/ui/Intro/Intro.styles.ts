import type { StylesWithOptionsAndTheme } from '../../../types/interfaces';
import type { WrapperStylesOptions } from './Intro.types';

const wrapper: StylesWithOptionsAndTheme<WrapperStylesOptions> =
  ({ image, gradient }) =>
  (theme) => ({
    width: '100%',
    minHeight: 1080,
    pt: 41.25,
    background: gradient
      ? `linear-gradient(1.22deg, ${theme.palette.background.default} 3.9%, rgba(24, 27, 72, 0) 98.66%), url(${image})`
      : `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
  });

export const styles = {
  wrapper,
};
