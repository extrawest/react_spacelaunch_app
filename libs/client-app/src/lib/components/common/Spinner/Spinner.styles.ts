import { alpha } from '@mui/material';

import type { StylesWithOptionsAndTheme } from '@vladyslav.haiduk_react/shared/types';

import type { WrapperStylesOptions } from './Spinner.types';

const wrapper: StylesWithOptionsAndTheme<WrapperStylesOptions> =
  ({ fixed }) =>
  (theme) => ({
    position: fixed ? 'fixed' : 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 'modal',
    bgcolor: alpha(theme.palette.background.default, 0.7),
  });

export const styles = {
  wrapper,
};
