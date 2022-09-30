import type { SxProps } from '@mui/material';

const wrapper: SxProps = {
  maxHeight: 711,
  aspectRatio: '1180 / 711',
  '& > div': {
    width: '100%',
    height: '100%',
    '& > iframe': {
      width: '100%',
      height: '100%',
    },
  },
};

export const styles = { wrapper };
