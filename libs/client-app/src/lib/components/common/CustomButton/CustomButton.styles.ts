import type { SxProps, Theme } from '@mui/material';

const button: SxProps<Theme> = (theme) => ({
  px: 10,
  py: 3.75,
  borderRadius: 10,
  background: `linear-gradient(93.72deg, ${theme.palette.secondary.main} 9.41%, ${theme.palette.primary.main} 86.1%)`,
  boxShadow: 0,
});

export const styles = {
  button,
};
