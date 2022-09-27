import type { SxProps, Theme } from '@mui/material';

const head: SxProps = {
  alignItems: 'center',
  justifyContent: 'space-between',
};

const navButton: SxProps<Theme> = (theme) => ({
  '& > svg': {
    fill: theme.palette.primary.main,
  },
  '&.swiper-button-disabled > svg': {
    fill: theme.palette.common.white,
  },
});

export const styles = {
  head,
  navButton,
};
