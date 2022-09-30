import type { SxProps, Theme } from '@mui/material';
import { alpha } from '@mui/material';

import type { StylesWithOptionsAndTheme } from '@vladyslav.haiduk_react/shared/types';

import type { ContentStylesOptions, LogoStylesOptions } from './Header.types';
import { countLogoTopStyle } from './Header.utils';

const wrapper: SxProps<Theme> = (theme) => ({
  bgcolor: alpha(theme.palette.common.black, 0.2),
  boxShadow: 'none',
});

const content: StylesWithOptionsAndTheme<ContentStylesOptions> =
  ({ small }) =>
  (theme) => ({
    position: 'relative',
    height: small ? 60 : 100,
    p: { xs: 0 },
    transition: `height ${theme.transitions.duration.shortest}ms ${theme.transitions.easing.easeIn}`,
  });

const homeLink: SxProps<Theme> = (theme) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 1.25,
  color: 'text.colorful',
  fontWeight: 600,
  transition: `transform ${theme.transitions.duration.shortest}ms ${theme.transitions.easing.easeIn}`,
  '& > svg': {
    width: 28,
    height: 28,
    fill: theme.palette.common.white,
  },
  '&:hover': {
    transform: 'translateY(-1px)',
  },
  '&:focus': {
    transform: 'translateY(-1px)',
  },
});

const logo: StylesWithOptionsAndTheme<LogoStylesOptions> =
  ({ centered, small }) =>
  (theme) => ({
    position: 'absolute',
    top: countLogoTopStyle({ centered, small }),
    right: centered ? '50%' : 0,
    transform: centered ? 'translateX(50%)' : undefined,
    width: small ? 70 : 95,
    height: small ? 79 : 107,
    transition: `all ${theme.transitions.duration.shortest}ms ${theme.transitions.easing.easeIn}`,
    transitionProperty: 'height, width, top',
  });

export const styles = {
  wrapper,
  content,
  homeLink,
  logo,
};
