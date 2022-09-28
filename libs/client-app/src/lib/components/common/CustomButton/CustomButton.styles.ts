import type { SxProps, Theme } from '@mui/material';

const button: SxProps<Theme> = (theme) => ({
  px: 10,
  py: 3.75,
  borderRadius: 10,
  background: `linear-gradient(93.72deg, ${theme.palette.secondary.main} 9.41%, ${theme.palette.primary.main} 86.1%)`,
  boxShadow: 0,
  transitionProperty: 'transform',
  transitionDuration: `${theme.transitions.duration.short}ms`,
  transitionTimingFunction: theme.transitions.easing.easeInOut,
  '&:hover': {
    boxShadow: 0,
    transform: 'scale(0.985)',
  },
  '&:focus': {
    boxShadow: 0,
    transform: 'scale(0.985)',
  },
});

export const styles = {
  button,
};
