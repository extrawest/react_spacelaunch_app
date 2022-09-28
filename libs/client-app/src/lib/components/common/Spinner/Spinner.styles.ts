import type { SxProps, Theme } from '@mui/material';
import { alpha } from '@mui/material';

const wrapper: SxProps<Theme> = (theme) => ({
  position: 'fixed',
  inset: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 'modal',
  bgcolor: alpha(theme.palette.background.default, 0.7),
});

export const styles = {
  wrapper,
};
