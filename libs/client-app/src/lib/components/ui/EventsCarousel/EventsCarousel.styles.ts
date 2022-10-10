import type { SxProps, Theme } from '@mui/material';

import type { StylesWithOptions } from '@vladyslav.haiduk_react/shared/types';

import type { NavStylesOptions } from './EventsCarousel.types';

const head: SxProps = {
  alignItems: 'center',
  justifyContent: 'space-between',
};

const nav: StylesWithOptions<NavStylesOptions> = ({ hidden }) => ({
  display: hidden ? 'none' : 'flex',
});

const navButton: SxProps<Theme> = (theme) => ({
  '& > svg': {
    width: { md: 56, sm: 48, xs: 40 },
    fill: theme.palette.primary.main,
  },
  '&.swiper-button-disabled > svg': {
    fill: theme.palette.common.white,
  },
});

export const styles = {
  head,
  nav,
  navButton,
};
