import type { SxProps } from '@mui/material';

import type { StylesWithOptions } from '@vladyslav.haiduk_react/shared/types';

import type { LoaderWrapperOptions } from './Loader.types';

const wrapper: StylesWithOptions<LoaderWrapperOptions> = ({ mt }) => ({
  mt,
  alignItems: 'center',
});

const progress: SxProps = {
  color: '#3F3881',
};

const label: SxProps = {
  fontStyle: 'italic',
};

export const styles = {
  wrapper,
  progress,
  label,
};
