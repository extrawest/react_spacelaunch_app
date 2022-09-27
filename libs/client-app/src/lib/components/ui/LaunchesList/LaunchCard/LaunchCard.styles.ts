import type { SxProps } from '@mui/material';

const card: SxProps = {
  position: 'relative',
  borderRadius: 0,
  boxShadow: 0,
};

const cardContent: SxProps = {
  p: 0,
  pt: 5,
  textAlign: 'center',
  '&:last-child': {
    pb: 0,
  },
};

const chipWrapper: SxProps = {
  position: 'absolute',
  top: 324,
  right: '50%',
  transform: 'translate(50%, -50%)',
};

export const styles = { card, cardContent, chipWrapper };
