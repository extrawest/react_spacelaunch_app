import type { SxProps } from '@mui/material';

import type { WrapperStylesOptions } from './Intro.types';

const wrapper: (options: WrapperStylesOptions) => SxProps = ({ image }) => ({
  width: '100%',
  minHeight: 1080,
  pt: 41.25,
  background: `url(${image}) no-repeat`,
  backgroundSize: 'cover',
  backgroundPosition: 'center top',
});

export const styles = {
  wrapper,
};
