import type { SxProps, Theme } from '@mui/material';

import type { ChipStylesOptions } from './CustomChip.types';

const chip: (options: ChipStylesOptions) => SxProps<Theme> =
  ({ gradient }) =>
  (theme) => ({
    ...theme.typography.caption,
    height: 'auto',
    px: 3.75,
    py: 1.25,
    borderRadius: 10,
    background: gradient
      ? `linear-gradient(94.97deg, ${theme.palette.secondary.main} 3.92%, ${theme.palette.primary.main} 52.92%)`
      : theme.palette.primary.main,
  });

export const styles = {
  chip,
};
