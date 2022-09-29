import type { SxProps } from '@mui/material';

const wrapper: SxProps = {
  aspectRatio: '16 / 9',
  '& > div > iframe': {
    width: '100%',
    height: '100%',
    aspectRatio: '16 / 9',
  },
};

export const styles = { wrapper };
