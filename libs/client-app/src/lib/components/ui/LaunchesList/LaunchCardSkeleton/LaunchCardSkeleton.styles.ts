import type { SxProps } from '@mui/material';

const wrapper: SxProps = {
  position: 'relative',
};

const image: SxProps = {
  height: 324,
  mb: 5,
};

const date: SxProps = {
  position: 'absolute',
  top: 324,
  right: '50%',
  height: 38,
  width: 286,
  borderRadius: 10,
  transform: 'translate(50%, -50%)',
};

export const styles = {
  wrapper,
  image,
  date,
};
