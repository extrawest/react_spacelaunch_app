import type { SxProps, Theme } from '@mui/material';
import { alpha } from '@mui/material';

import type { StylesWithOptions } from '@vladyslav.haiduk_react/shared/types';

import type { LogoStylesOptions } from './Header.types';

const wrapper: SxProps<Theme> = (theme) => ({
  bgcolor: alpha(theme.palette.common.black, 0.2),
  boxShadow: 'none',
});

const content: SxProps = {
  position: 'relative',
  height: 100,
  p: { xs: 0 },
};

const homeLink: SxProps<Theme> = (theme) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 1.25,
  color: 'text.colorful',
  fontWeight: 600,
  transitionProperty: 'transform',
  transitionDuration: `${theme.transitions.duration.shortest}ms`,
  transitionTimingFunction: theme.transitions.easing.easeInOut,
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

const logo: StylesWithOptions<LogoStylesOptions> = ({ centered }) => ({
  position: 'absolute',
  top: centered ? '50%' : '70%',
  right: centered ? '50%' : 0,
  transform: centered ? 'translateX(50%)' : undefined,
  width: 95,
  height: 107,
});

export const styles = {
  wrapper,
  content,
  homeLink,
  logo,
};
