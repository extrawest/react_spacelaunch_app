import type { StylesWithOptionsAndTheme } from '@vladyslav.haiduk_react/shared/types';

import type { ChipStylesOptions } from './CustomChip.types';

const chip: StylesWithOptionsAndTheme<ChipStylesOptions> =
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
